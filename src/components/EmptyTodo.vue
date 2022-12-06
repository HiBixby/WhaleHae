<template>
  <div class="empty-todo">
    <div>
      <p>오늘은 한가하네요</p>
      <p>일정을 추가해봐요!</p>
    </div>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="54"
        viewBox="0 0 54 54"
      >
        <defs>
          <filter
            id="mt1lapbf5a"
            x="0"
            y="0"
            width="54"
            height="54"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood flood-opacity=".161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g data-name="그룹 118">
          <g style="filter: url(#mt1lapbf5a)">
            <circle
              data-name="타원 28"
              cx="18"
              cy="18"
              r="18"
              transform="translate(9 6)"
              style="fill: #fff"
            />
          </g>
          <path
            data-name="패스 72"
            d="M-541 154a18 18 0 0 0 18-18 18 18 0 0 0-18-18 18 18 0 0 0-18 18 18 18 0 0 0 18 18zm-1.687-11.812v-4.5h-4.5a1.683 1.683 0 0 1-1.688-1.688 1.683 1.683 0 0 1 1.688-1.687h4.5v-4.5a1.683 1.683 0 0 1 1.687-1.688 1.683 1.683 0 0 1 1.688 1.688v4.5h4.5a1.683 1.683 0 0 1 1.687 1.687 1.683 1.683 0 0 1-1.687 1.688h-4.5v4.5a1.683 1.683 0 0 1-1.688 1.687 1.683 1.683 0 0 1-1.687-1.688z"
            transform="translate(568 -112)"
            style="fill: #34e8cd"
          />
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "EmptyTodo",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empty-todo {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
