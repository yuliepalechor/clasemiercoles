Vue.component("tv-show-list",{
    data:function(){
     return{
        tvshows:[
            { nombre: 'game of thorones',temporadas: 1 },
            { nombre: 'game of thorones',temporadas: 2},
            { nombre: 'game of thorones',temporadas: 3},
            { nombre: 'game of thorones',temporadas: 4},
            
        ]  
     }   
    },
    template: `
    <ul> 
    </ul>
    `
})



 Vue.component('tv-show',{         // estamos crando un componente llamado tv-show
 props: {
 nombre: String,
 temporadas: Number,
 },
 template: `  
 <li>
 <strong> {{ nombre }}</strong> ({{ temporadas}} Temporadas)
 </li>
 `
 
})     


const app =new Vue({
el:'#app',
data:{
    mostrar: true,
   /*tvshows:[
        { nombre: 'game of thorones',temporadas: 1 },
        { nombre: 'game of thorones',temporadas: 2},
        { nombre: 'game of thorones',temporadas: 3},
        { nombre: 'game of thorones',temporadas: 4},
        
    ]*/
},
methods:{
    changeVisibility: function(){
        this.mostrar=!this.mostrar
    }
}
})

ahahahahahahahaahh