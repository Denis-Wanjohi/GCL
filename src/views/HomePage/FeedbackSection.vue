<template>
  <div>
    <form @submit.prevent="sendMessage" class="w-1/2 mx-auto">
      <div>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" v-model="fname" required /><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" v-model="lname" /><br>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const fname = ref('');
const lname = ref('');
const email = ref('');
const message = ref('');

const sendMessage = () => {
  axios.post('/api/send-message', {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    message: message.value,
  })
    .then(response => {
      console.log('Message sent successfully:', response.data);
      alert('Message sent successfully!');
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again.');
    });

  fname.value = '';
  lname.value = '';
  email.value = '';
  message.value = '';
};
</script>

<style>
input[type=text],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
