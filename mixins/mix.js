export default{
    methods: {
        contact(){
            window.open('https://wa.link/vyreof', '_blank')
        },
        cv(){
            window.open('https://drive.google.com/file/d/1IW7BVVBppKRsVQU2r7kcFkticKPyrOK2/view?usp=sharing', '_blank')
        },
        instagram(){
            window.open('https://www.instagram.com/dhimaseka01/', '_blank')
        },
        linkedin(){
            window.open('https://www.linkedin.com/in/dhimas-prasetya/', '_blank')
        },
        github(){
            window.open('https://github.com/dimaseka83', '_blank')
        }
    },
    computed: {
        year(){
            return new Date().getFullYear()
        }
    }
}