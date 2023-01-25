<template>
    <h2>Counter</h2>
    <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>

    <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>



    <div>

        <button v-on:click="mas()" >+1</button>
        <button @click="menos()">-1</button>
    </div>
        
</template>

<script>
export default{
    data(){
        return{
             counter : 5
        }    

    },
    methods:{
        getSquareValue(){
            console.log('getSquareValue')
            return this.counter * this.counter
        },
        
        mas(){
           this.counter++           
        },

        menos(){
            this.counter--
        }
    },

    computed:{
        squareCounter(){
            console.log('computed squareCounter')
            return this.counter * this.counter
        }
    }
}

</script>

<style>

button{
    background-color: #64BB87;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover{
    background-color: #5aa67b;
    transition:0.3s ease-in-out ;
}

</style>