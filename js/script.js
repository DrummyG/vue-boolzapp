
const app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        counter: 0,
        filterer: '',
        usersFiltered: [],
        add: '',
        data: new Date().getHours() + ':' + new Date().getMinutes(),
        setter: false
    },
    methods:{
        setDate(){ 
            this.contacts.forEach(element => {
                dayjs.extend(window.dayjs_plugin_customParseFormat) 
                element.messages.forEach(data =>{    
                    data.date = dayjs(data.date, 'DD/MM/YYYY HH:mm:ss').format('H:mm')             
                })
            });
        },
        filter(){
            this.usersFiltered = this.contacts.filter((item) => item.name.includes(this.filterer))
        },
        effetto(index){
            this.counter = index
        },
        elimina(messaggio, index){
            if(messaggio.length == 1){
                let save = {
                    date: '',
                    message: '',
                    status: 'saver'
                }
                messaggio.push(save)
            }
            messaggio.splice(index, 1)
        },
        aggiungi(user){
            if(this.add !== '' & this.add !== ' '){
                const nuovoMessaggio = {
                    date: this.data,
                    message: this.add,
                    status: 'sent'
                }
                user.messages.push(nuovoMessaggio)
                this.add = ''
                setTimeout(() =>{
                    const nuovaRisposta = {
                        date: this.data,
                        message: 'La tua faccia',
                        status: 'received'
                    }
                    user.messages.push(nuovaRisposta)
                }, 1000)
            }
        },
        classi(text){
            if(text.status == 'sent'){
                return 'sent'
            } else if(text.status == 'received'){
                return 'received'
            } else{
                return 'saved'
            }
        },
        ChatDelete(index){
            this.contacts.splice(index, 1)
            this.filter()
        },
        AllMessagesDel(user){
            user.messages.splice(0, user.messages.length - 1)
            let same = user.messages
            if(same.length === 1){
                let save = {
                    date: '',
                    message: '',
                    status: 'saver'
                }
                same.push(save)
                same.splice(0, 1)
            }
        },
        responsive(user){
            this.setter = true
            this.contacts.forEach((item) => {
                item.visible = true
            })
            user.visible = false
            console.log(user.visible)
        },
        goBack(user){
            user.visible = true
            this.setter = false
        }
    },
    mounted(){
        this.filter()
        this.setDate()
    }
})