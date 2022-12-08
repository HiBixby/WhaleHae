<template>
  <div class="container">
    <nav>
      <router-link to="/" custom v-slot="{ navigate }">
        <button @click="navigate" class="btn-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.507"
            height="20.553"
            viewBox="0 0 11.507 20.553"
          >
            <path
              id="back"
              d="M9.938,19.835.154,10.356l0,0,0,0-.006-.006,0,0-.007-.007,0,0-.008-.009h0A.478.478,0,0,1,0,10.012s0,0,0-.006S0,10,0,10a.465.465,0,0,1,.059-.219v0l0-.007,0-.006v0a.528.528,0,0,1,.093-.114L9.938.177A.681.681,0,0,1,10.8.133a.476.476,0,0,1,.051.743L1.43,10.006l9.421,9.13a.476.476,0,0,1-.051.743.668.668,0,0,1-.406.133A.659.659,0,0,1,9.938,19.835Z"
              transform="translate(0.25 0.291)"
              fill="#707070"
              stroke="#707070"
              stroke-linecap="round"
              stroke-width="0.5"
            />
          </svg>
        </button>
      </router-link>
    </nav>
    <header>
      <time class="day">2022.12.06</time>
      <time class="time">14:50</time>
    </header>
    <form>
      <label>To do</label>
      <input type="text" placeholder="제목을 입력해주세요." />
      <label>Link</label>
      <input type="link" placeholder="URL을 입력해주세요." />
    </form>
    <button class="btn-delete">삭제</button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  props: {},
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100%;
  margin: 0 7%;
  display: flex;
  flex-direction: column;
}
button:hover {
  cursor: pointer;
}
nav {
  margin-top: 3.5rem;
  margin-bottom: 3.7rem;
}

form {
  flex: 1;
}
.btn-prev {
  padding: 0;
  background: transparent;
  border: none;
}
.day {
  display: block;
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: 200;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: var(--green-blue);
}
.time {
  display: inline-block;
  margin-bottom: 5.3%;
  font-size: 3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: var(--green-blue);
}
label {
  margin-bottom: 0.5rem;
  display: block;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  color: var(--green-blue);
}
input {
  width: 100%;
  margin-bottom: 1.3rem;
  padding: 1rem;
  border-radius: 15px;
  border: solid 0.5px var(--aqua-marine);
  background-color: var(--ice-blue);
  font-size: 1rem;
  font-weight: 600;
  color: var(--green-blue);
}
input::placeholder {
  font-size: 0.875rem;
  font-weight: 200;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: var(--light-grey-blue);
}
input:focus {
  outline-color: var(--green-blue);
}
.btn-delete {
  min-height: 3.188rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 15px;
  background-color: var(--green-blue);
  color: var(--ice-blue);
  margin-bottom: 3.5rem;
}
</style>
