<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="logout">Logout</button>
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>


<script>
import firebase from 'firebase'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
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
  components: {
    HelloWorld
  },
  methods: {
	logout: function() {
		firebase.auth().signOut().then(() => {
			this.$router.replace('login')
		})
	}
  }
}


</script>
