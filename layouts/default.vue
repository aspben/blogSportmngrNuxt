<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <div class="border-t-14 border-red-900 text-right">
        <nav class="md:pl-12 flex">
          <n-link to="/blog/" class="relative p-2">BLOG</n-link>
          <n-link to="/tutorial/" class="relative p-2">Tutorial</n-link>
          <div class="spacer flex-1"></div>
          <a href="https://www.sportmngr.com">
            <div class="bg-gray-900 cursor-pointer hover:shadow-lg p-2 rounded-bl-lg">
              <div class="flex items-center text-gray-200">
                <div class="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      fill="white"
                      d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"
                    />
                  </svg>
                </div>

                <div class="sm:text-xs">Try the App</div>
              </div>
            </div>
          </a>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-screen-lg flex-1">
      <div class="flex justify-center items-center py-4 md:py-12">
        <div>
          <n-link to="/">
            <logo />
          </n-link>
        </div>
        <div class>
          <span class="font-sans pl-4 text-3xl md:text-5xl font-black">SportMngr</span>
          <span class="font-sans text-sm md:text-1xl font-thin text-grey">BLOG</span>
        </div>
      </div>

      <article class="flex-grow">
        <nuxt />
      </article>
    </main>

    <footer class="bg-red-800 text-white">
      <div class="flex flex-col justify-between lg:flex-row p-4">
        <ul class="flex justify-around mb-4">
          <li class="mx-4">
            <a href="mailto:benoit.aspirault@gmail.com" class="text-white hover:text-gray-400">
              <svg width="25" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 0h20A2.5 2.5 0 0 1 25 2.5v15a2.5 2.5 0 0 1-2.5 2.5h-20A2.5 2.5 0 0 1 0 17.5v-15C0 1.125 1.125 0 2.5 0zm20 4.225V2.5h-20v1.725l10 5 10-5zm0 2.8l-9.438 4.713a1.25 1.25 0 0 1-1.124 0L2.5 7.025V17.5h20V7.025z"
                  fill-rule="nonzero"
                />
              </svg>
            </a>
          </li>

          <li class="mx-4">
            <a
              href="https://www.youtube.com/channel/UCeRDR_LCvryc05OjIWcn6tg"
              target="_blank"
              class="text-white hover:text-gray-400"
            >
              <svg width="26" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.457 3.13c-.3-1.232-1.18-2.203-2.299-2.532C21.13 0 13 0 13 0S4.87 0 2.842.598c-1.119.33-2 1.3-2.299 2.531C0 5.362 0 10.02 0 10.02s0 4.658.543 6.891c.3 1.232 1.18 2.162 2.299 2.49C4.87 20 13 20 13 20s8.13 0 10.158-.598c1.119-.33 2-1.26 2.299-2.49C26 14.677 26 10.02 26 10.02s0-4.658-.543-6.89zM10.34 14.25V5.79l6.795 4.23-6.795 4.23z"
                  fill-rule="nonzero"
                />
              </svg>
            </a>
          </li>
        </ul>
        <div class="text-xs">Copyright 2020. All rights reserved.</div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  components: {
    logo: () => import("@/components/logo.vue")
  }
};
</script>


<style>
html {
  font-family: Roboto, "Helvetica Neue";
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
