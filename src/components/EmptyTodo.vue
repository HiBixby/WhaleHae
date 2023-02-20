<template>
  <div class="container">
    <div>
      <p>오늘은 한가하네요</p>
      <p>일정을 추가해봐요!</p>
    </div>
    <router-link to="/todo" v-slot="{ navigate }" custom>
      <button @click="navigate" title="새 일정 생성">
        <BigCirclePlusIcon />
      </button>
    </router-link>
  </div>
</template>

<script>
import BigCirclePlusIcon from "../assets/big-circle-plus.svg";
export default {
  name: "EmptyTodoComponent",
  components: {
    BigCirclePlusIcon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}
p {
  margin: 0;
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.03px;
  text-align: center;
  color: #707070;
}
button {
  margin-top: 0.6%;
  padding: 0;
  background: transparent;
  border: none;
}
button:hover {
  cursor: pointer;
}
</style>
