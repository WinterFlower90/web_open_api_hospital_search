<template>
  <div>
    <div>
      <el-input placeholder="Please input" v-model="searchKeyword"></el-input>
      <el-button icon="el-icon-search" @click="getList()" circle></el-button>
    </div>
    <div v-for="(item, index) in hospitalList">
      <figure class="jooeul1123" >
        <img src='/images/2221.jpg' alt="back"/>
        <figcaption>
          <img src='/images/2222.jpg' alt="profile" class="profile"/>
          <h2>{{ item.orgnm }}<span>{{ item.orgcd }}</span></h2>
          <p>
            요일: {{ item.dywk }}<br/>
            주소: {{ item.orgZipaddr }}<br/>
            전화번호: {{ item.orgTlno }}
          </p>
        </figcaption>
      </figure>
    </div>
    <el-pagination
      background
      small
      layout="prev, pager, next"
      :total="matchCount"
      :current-page="page"
      @current-change="setPage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      searchKeyword: ''
    }
  },
  computed: {
    hospitalList() {
      return this.$store.getters[this.$hospitalConstants.GET_LIST]
    },
    matchCount() {
      return this.$store.getters[this.$hospitalConstants.GET_MATCH_COUNT]
    },
    page() {
      return this.$store.getters[this.$hospitalConstants.GET_PAGE]
    },
    totalCount() {
      return this.$store.getters[this.$hospitalConstants.GET_TOTAL_COUNT]
    },
  },
  methods: {
    getList() {
      let payload = {
        page: this.page,
        searchKeyword: this.searchKeyword
      }
      this.$store.dispatch(this.$hospitalConstants.DO_LIST, payload)
    },
    setPage(pageNum) {
      this.$store.commit(this.$hospitalConstants.FETCH_PAGE, pageNum)
    }
  },
  watch: {
    page() {
      this.getList()
    }
  },
  created() {
    this.getList()
  },
}
</script>
<style>
.jooeul1123 {
  font-family: 'Roboto', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 230px;
  max-width: 350px;
  width: 100%;
  color: #ffffff;
  text-align: left;
  line-height: 1.4em;
  background-color: #141414;
}
.jooeul1123 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.jooeul1123 img {
  max-width: 100%;
  vertical-align: top;
  opacity: 0.85;
}
.jooeul1123 figcaption {
  width: 100%;
  background-color: #141414;
  padding: 25px;
  position: relative;
}
.jooeul1123 figcaption:before {
  position: absolute;
  content: '';
  bottom: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 55px 0 0 400px;
  border-color: transparent transparent transparent #141414;
}
.jooeul1123 figcaption a {
  padding: 5px;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 0.7em;
  text-transform: uppercase;
  margin: 10px 0;
  display: inline-block;
  opacity: 0.65;
  width: 47%;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}
.jooeul1123 figcaption a:hover {
  opacity: 1;
}
.jooeul1123 .profile {
  border-radius: 50%;
  position: absolute;
  bottom: 100%;
  left: 25px;
  z-index: 1;
  max-width: 90px;
  opacity: 1;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
.jooeul1123 .follow {
  margin-right: 4%;
  border-color: #2980b9;
  color: #2980b9;
}
.jooeul1123 h2 {
  margin: 0 0 5px;
  font-weight: 300;
}
.jooeul1123 h2 span {
  display: block;
  font-size: 0.5em;
  color: #2980b9;
}
.jooeul1123 p {
  margin: 0 0 10px;
  font-size: 0.8em;
  letter-spacing: 1px;
  opacity: 0.8;
}
</style>
