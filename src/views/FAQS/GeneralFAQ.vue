<template>
    <div data-aos="fade-down">
        <div class="font-semibold text-3xl  py-5">General FAQS</div>
        
        <div v-for="(faqs,i) in data" :key="i" class=" border-t shadow-lg mx-5  text-start">
            <div class="text-xl font-mono text-center">{{ faqs.title }}</div>
            <div v-for="(faq,i) in faqs.questions" :key="i">
                <v-card class="border mx-3 my-1">
                    <v-card-title class="text-wrap" style="font-weight: 600">{{ faq }}</v-card-title>
                    <v-card-text>{{ faqs.answers[i] }}</v-card-text>
                </v-card>
            </div>
            <!-- <v-card>
                <v-card-title v-for="(question,i) in faqs.questions" :key="i">{{question}}</v-card-title>
                <v-card-text>one</v-card-text>
            </v-card> -->
            
        </div>
    </div>
</template>
<script setup>
const data = [

    {
        title:"Account and Billing",
        questions:[
            "How do I update my account information?",
            "What happens if I miss a payment? "
        ],
        answers:[
            "Reach out to us through our whatsapp/hotline number for guidance",
            "We will send you a reminder, and if payment is not made, your service may be suspended. Contact us to discuss payment options."
        ]
    },
    {
        title:"Packages and Pricing",
        questions:[
            "How do i change my package?",
            "Do you offer discounts for students?"
        ],
        answers:[
            " Contact our support team to discuss your options and make changes to your package.",
            "Yes, we offer discounts for students. Contact our support team to learn more."
        ]
    },
    {
        title:"fiber Specific",
        questions:[
            "What is the difference between fiber and wireless internet?",
            "How do I check if fiber is available in my area?"
        ],
        answers:[
            "fiber optic internet uses light to transmit data through fiber optic cables, while wireless internet uses radio waves to transmit data through the air.",
            "Check our coverage map or contact our support team to determine availability"
        ]
    },
    {
        title:"General Issues",
        questions:[
            "How do I contact your support team?",
            "What are your office hours?",
            "Do you offer technical support in Swahili?",
            "How do I report an outage or technical issue?"
        ],
        answers:[
            "You can contact us through our website ,email (sales@gigabit.co.ke) or call (+254712999333)",
            "Our office is open from 8 am to 5 pm on Monday to Friday and 9 am to 1 pm on Saturday.",
            "Yes, our support team is fluent in both English and Swahili.",
            "Contact our support team through our website, email, or phone to report an outage or technical issue."
        ]
    }
]
</script>

