<template>
  <div class="chart">
    <h1>Grafica de Barras</h1>
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />  
    <button @click="goHome">Go home</button>
    <button @click="logout">Logout</button>      
  </div>
</template>

<script>
import firebase from '../firebase';
import firebaseAuth from 'firebase'

export default {
    name: 'chart',
    data () {
      return {
        // Array will be automatically processed with visualization.arrayToDataTable function
        chartData: [
          ['Total', 'Aciertos', 'Errores'],
          ['1', 5, 8],
          ['2', 7, 3],
          ['3', 2, 6],
          ['4', 7, 9]
        ],
        chartOptions: {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        }
      }
    },   
    methods:{
      getDataChart(){
        
        const arrayAnswers = [];
        let _this = this
        var query = firebase.ref('answers');

        function promiseArrayAnswer() {
          var promise = new Promise(function(resolve) {

            query.on("value", function(snapshot) {
              snapshot.forEach(function(childSnapshot) {
                arrayAnswers.push({questionId: childSnapshot.val().questionId , answer: childSnapshot.val().answer, right: childSnapshot.val().right})
              });

              resolve(arrayAnswers);

            }, function() {
              
            });

          });

          return promise
        }

        promiseArrayAnswer().then(function(done) {
          _this.getBarChart(done);
        });
      },
      getBarChart(arrayAnswers){

        const map = new Map();
        const arrUnic = [];
        const arrayTotalBar = [['Total', 'Aciertos', 'Errores']];
        
        arrayAnswers.forEach(myFunction)

        function myFunction(item, index, arr) {
          if(!map.has(arr[index].questionId)){
              map.set(arr[index].questionId, true);
              arrUnic.push(arr[index].questionId);
          }
        }

        for(var j=0; j<arrUnic.length; j++)
        {
          var contBuenos = 0;
          var contMalos = 0; 

          for(var i=0;i < arrayAnswers.length; i++)
          {
            if(arrUnic[j] === arrayAnswers[i].questionId){
              if(arrayAnswers[i].right){
                contBuenos++;
              }else{
                contMalos++;
              }
            }
          }

          arrayTotalBar.push([arrUnic[j].toString(),contBuenos,contMalos]);
        } 

        this.chartData= arrayTotalBar;
      },
      logout: function() {
        firebaseAuth.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      },
      goHome: function(){
        this.$router.replace('home')
      }      
    },
    created(){
      this.getDataChart()
    }
}

</script>
