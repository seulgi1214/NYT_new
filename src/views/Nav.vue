<template>

<nav>
  <h1 class="title"><router-link to="/">The NewYork Times</router-link></h1>
  <span class="date">{{currentDate.dayOfWeek}}, {{currentDate.month}} {{currentDate.day}} {{currentDate.year}}</span>
  <ul class="nav_list">
    <li><router-link to="/now">NOW</router-link></li>
    <li><router-link to="/books">BOOKS</router-link></li>
    <li><router-link to="/food">FOOD</router-link></li>
    <li><router-link to="/movie">MOVIE</router-link></li>
  </ul>
</nav>

</template>
<script>
export default {
  name: '',
  component: {},
  data(){
    return {
      currentDate : 
        {
          dayOfWeek: "dayOfWeek", 
          month: "month", 
          day: "day", 
          year: "year"
        }

        
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.getDate();
  },
  unmounted() {},
  methods: {

    getDate() {
      let now = new Date();
      let year = now.getFullYear();
      const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      let month = monthList[now.getMonth()];
      let day = now.getDate();
      const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      let dayOfWeek = week[now.getDay() - 1];
      //console.log("연도:" + year + month + day + dayOfWeek);
      return this.currentDate = {dayOfWeek: dayOfWeek, month: month, day: day, year: year}
      

    }
  }
}
</script>
<style scoped>  

  nav .title {
    text-align: center;
    font-size: 50px;
    font-weight: 800;
  }

  nav .date {
    font-size: 13px;
    font-weight: 600;
    font-family: 'Besley', serif;
  }

  .nav_list {
    display: flex;
    justify-content: center;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
    padding: 5px 0;
  }
  .nav_list li {
    cursor: pointer;
  }
  .nav_list li:not(:last-child) {
    margin-right: 15px;
  }
</style>