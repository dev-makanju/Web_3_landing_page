<template>
  <div class="flex justify-center items-center p-2 flex-col" id="faq">
      <h1 class="text-white text-xl text-center pt-6 pb-4">Frequently Asked Questions</h1>
      <div class="accordion rounded-2xl md:w-[700px] shadow-smoke p-2 md:p-4 mt-4">
        <div class="border-b-2 border-b-[#fff] overflow-hidden" v-for="(faq , index) in questions" :key="index">
          <div class="flex justify-between p-3">
              <h2 class="text-white text-[14px] md:text-[16px]">{{ faq.quest }}</h2>
              <div @click.prevent="accordionHandler(index)" :class="['duration-500 text-white text-[14px] md:text-[20px] cursor-pointer', faq.select ? 'rotate-[180deg]' : '']">
                <font-awesome-icon icon="angle-down"/>
              </div>
          </div>
          <div :class="['select-accordion',  faq.select ? 'sel' : '']" id="content">
              <!-- content -->
              <p class="text-white text-[14px] tracking-wide p-3">{{ faq.answ }}</p>
          </div>
        </div>
      </div>
      <div class="p-1 md:p-5 mb-4 mt-4">
          <h1 class="text-white text-xl text-center mt-4 mb-4 font-bold tracking-[1px]">Our Patners</h1>
          <ul class="flex flex-wrap gap-[4rem] items-center justify-start p-2">
               <li class="w-[7px]">
                  <span>
                    <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.878906 28.1819L0.878909 9.39404L10.2728 14.6129V23.0152L17.788 27.2425L25.3031 23.0152V14.6129L34.6971 9.39404V28.1819L17.788 37.5758L0.878906 28.1819Z" fill="#192657"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57564 12.0034L0.878662 9.39394L17.7878 0L34.6969 9.39394L29.9999 12.0034V25.8333L17.7878 32.8788L5.57563 25.8333L5.57564 12.0034ZM29.4911 12.2861L25.3029 14.6128V14.5606L17.7878 10.3333L10.2726 14.5606V14.6128L6.08447 12.2861V25.5443L17.7878 32.2962L29.4911 25.5443V12.2861Z" fill="url(#paint0_linear_98_94)"/>
                    <defs>
                    <linearGradient id="paint0_linear_98_94" x1="5.57563" y1="7.30638" x2="30.9393" y2="7.30639" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#64C2DB"/>
                    <stop offset="0.307292" stop-color="#7476ED"/>
                    <stop offset="0.604167" stop-color="#C994DF"/>
                    <stop offset="1" stop-color="#E56F8C"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  </span>
               </li>
               <li class="w-[12px]">
                  <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_98_142)">
                  <path d="M5.74656 28.7259C7.28673 29.8002 9.78384 29.8002 11.324 28.7259C12.8641 27.6516 12.8641 25.9098 11.324 24.8355C9.78384 23.7612 7.28673 23.7612 5.74656 24.8355C4.20639 25.9098 4.20639 27.6516 5.74656 28.7259Z" fill="#25CAAC"/>
                  <path d="M21.7322 14.1369C24.0425 15.7483 27.7881 15.7483 30.0984 14.1369C32.4086 12.5254 32.4086 9.91278 30.0984 8.30135C27.7881 6.68991 24.0425 6.68991 21.7322 8.30135C19.422 9.91278 19.422 12.5254 21.7322 14.1369Z" fill="#25CAAC"/>
                  <path d="M13.2464 21.4316C15.1716 22.7744 18.293 22.7744 20.2182 21.4316C22.1434 20.0887 22.1434 17.9115 20.2182 16.5686C18.293 15.2258 15.1716 15.2258 13.2464 16.5686C11.3212 17.9115 11.3212 20.0887 13.2464 21.4316Z" fill="#25CAAC"/>
                  <path d="M0.866345 20.4591C2.02147 21.2648 3.8943 21.2648 5.04943 20.4591C6.20455 19.6534 6.20455 18.3471 5.04943 17.5413C3.8943 16.7356 2.02147 16.7356 0.866345 17.5413C-0.288782 18.3471 -0.288781 19.6534 0.866345 20.4591Z" fill="#25CAAC"/>
                  <path d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335716 15.1716 -0.335717 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z" fill="#25CAAC"/>
                  <path d="M5.74655 13.1643C7.28672 14.2386 9.78383 14.2386 11.324 13.1643C12.8641 12.09 12.8641 10.3482 11.324 9.27398C9.78383 8.19969 7.28672 8.19969 5.74655 9.27398C4.20638 10.3482 4.20639 12.09 5.74655 13.1643Z" fill="#25CAAC"/>
                  <path d="M13.2464 36.9931C15.1716 38.3359 18.293 38.3359 20.2182 36.9931C22.1434 35.6502 22.1434 33.473 20.2182 32.1301C18.293 30.7873 15.1716 30.7873 13.2464 32.1301C11.3212 33.473 11.3212 35.6502 13.2464 36.9931Z" fill="#25CAAC"/>
                  <path d="M31.9011 21.9177C34.2114 23.5291 37.9571 23.5291 40.2673 21.9177C42.5776 20.3063 42.5776 17.6936 40.2673 16.0822C37.9571 14.4707 34.2114 14.4707 31.9011 16.0822C29.5909 17.6936 29.5909 20.3063 31.9011 21.9177Z" fill="#25CAAC"/>
                  <path d="M21.7322 29.6983C24.0425 31.3098 27.7881 31.3098 30.0984 29.6983C32.4086 28.0869 32.4086 25.4743 30.0984 23.8628C27.7881 22.2514 24.0425 22.2514 21.7322 23.8628C19.422 25.4743 19.422 28.0869 21.7322 29.6983Z" fill="#25CAAC"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_98_142">
                  <rect width="42" height="38" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
               </li>
               <li class="w-[12px]">
                  <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.98438 29.2901C1.98438 27.0301 2.4295 24.7921 3.2944 22.7042C4.15932 20.6161 5.42698 18.7189 7.02509 17.1208C8.62321 15.5227 10.5204 14.255 12.6084 13.3901C14.6965 12.5253 16.9344 12.0801 19.1945 12.0801V29.2901H1.98438Z" fill="#442781"/>
                  <path d="M1.98438 29.29C1.98438 31.5501 2.4295 33.788 3.2944 35.8761C4.15932 37.9641 5.42698 39.8613 7.02509 41.4594C8.62321 43.0575 10.5204 44.3252 12.6084 45.1901C14.6965 46.055 16.9344 46.5001 19.1945 46.5001V29.29H1.98438Z" fill="#61459C"/>
                  <path d="M36.4043 29.29C36.4043 31.5501 35.9595 33.788 35.0947 35.8761C34.2298 37.9641 32.9622 39.8613 31.3638 41.4594C29.7657 43.0575 27.8685 44.3252 25.7804 45.1901C23.6925 46.055 21.4545 46.5001 19.1945 46.5001V29.29H36.4043Z" fill="#A992DB"/>
                  <path d="M47.0156 14.422C47.0156 21.5586 41.23 27.344 34.0935 27.344H21.1716V14.422C21.1716 7.2854 26.957 1.5 34.0935 1.5C41.23 1.5 47.0156 7.2854 47.0156 14.422Z" fill="#FF7917"/>
                  </svg>
               </li>
               <li class="w-[12px]">
                  <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" fill="#17CF97"/>
                  <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" fill="#17CF97"/>
                  <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" fill="#17CF97"/>
                  <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" fill="#17CF97"/>
                  </svg>
               </li>
               <li class="w-[12px]">
                  <svg width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" fill="#007AFF"/>
                  <path d="M17.4224 27.1022L11.4192 36.0002H33.5008L49 13.0273H32.7024L23.2064 27.1022H17.4224Z" fill="#312ECB"/>
                  </svg>
               </li>
               <li class="w-[12px]">
                  <svg width="73" height="49" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86768 36.4264 1.86768 24C1.86768 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" fill="#68DBFF"/>
                  <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" fill="#FF7917"/>
                  <path d="M36.6705 42.8418C42.8109 38.8241 46.8676 31.886 46.8676 24.0002C46.8676 16.1146 42.8109 9.17629 36.6705 5.15869C30.5904 9.17629 26.5735 16.1146 26.5735 24.0002C26.5735 31.886 30.5904 38.8241 36.6705 42.8418Z" fill="#5D2C02"/>
                  </svg>
               </li>
               <li class="w-[12px]">
                  <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 23C13.6863 23 11 20.3137 11 17C11 13.6863 13.6863 11 17 11C20.3137 11 23 13.6863 23 17C23 20.3137 20.3137 23 17 23Z" fill="#51A3EE"/>
                  <path d="M5.37629 19.0497C3.63754 19.3563 2.44572 21.0359 3.11317 22.6705C4.04501 24.9525 5.53164 26.9857 7.45895 28.5745C10.2149 30.8462 13.6909 32.0601 17.2619 31.9978C20.8329 31.9355 24.2645 30.601 26.9395 28.2344C28.8101 26.5794 30.2249 24.4955 31.0766 22.1824C31.6866 20.5255 30.4368 18.8885 28.6884 18.6428C26.9401 18.3971 25.3703 19.6697 24.5067 21.2097C24.0386 22.0444 23.4309 22.8017 22.7029 23.4458C21.1681 24.8037 19.1992 25.5693 17.1504 25.6051C15.1015 25.6408 13.1071 24.9444 11.5259 23.6409C10.7758 23.0226 10.1421 22.287 9.64508 21.4691C8.72829 19.9602 7.11504 18.7431 5.37629 19.0497Z" fill="#51A3EE"/>
                  <path d="M31.884 18.8745C31.9606 18.2604 32 17.6348 32 17C32 8.71573 25.2843 2 17 2C8.71573 2 2 8.71573 2 17C2 17.8147 2.06495 18.6142 2.18996 19.3937C2.87894 18.4505 3.95426 17.7772 5.11576 17.5724C6.37245 17.3508 7.51458 17.6556 8.48027 18.2253C8.42322 17.8251 8.3937 17.416 8.3937 17C8.3937 12.2469 12.2469 8.3937 17 8.3937C21.7531 8.3937 25.6063 12.2469 25.6063 17C25.6063 17.3134 25.5895 17.6229 25.5569 17.9276C26.5022 17.3243 27.6332 16.9796 28.8971 17.1573C30.0647 17.3214 31.1625 17.9564 31.884 18.8745Z" fill="#0E4F8B"/>
                  </svg>
               </li>
               <li class="w-[12px] ">
                  <svg width="35" height="27" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4469 23.968C7.46073 26.9542 2.40329 26.9423 0.990883 22.9624C0.714354 22.1832 0.493259 21.382 0.330644 20.5645C-0.333309 17.2265 0.00745571 13.7667 1.30985 10.6224C2.61224 7.4782 4.81776 4.79076 7.64751 2.89998C10.4773 1.0092 13.8042 -1.45785e-07 17.2075 0C20.6108 1.45785e-07 23.9377 1.0092 26.7674 2.89998C29.5972 4.79076 31.8027 7.4782 33.1051 10.6225C34.4075 13.7667 34.7482 17.2265 34.0843 20.5645C33.9217 21.382 33.7006 22.1832 33.424 22.9624C32.0116 26.9423 26.9542 26.9542 23.968 23.968L19.3584 19.3584C18.918 18.918 18.9635 18.1917 19.085 17.5809C19.1588 17.2096 19.1209 16.8247 18.976 16.4749C18.8311 16.1251 18.5858 15.8261 18.271 15.6158C17.9562 15.4055 17.5861 15.2932 17.2075 15.2932C16.8289 15.2932 16.4588 15.4055 16.144 15.6158C15.8291 15.8261 15.5838 16.1251 15.4389 16.4749C15.294 16.8247 15.2561 17.2096 15.33 17.5809C15.4515 18.1917 15.4969 18.918 15.0565 19.3584L10.4469 23.968Z" fill="url(#paint0_linear_98_119)"/>
                  <defs>
                  <linearGradient id="paint0_linear_98_119" x1="32.8486" y1="8.60374" x2="2.30537" y2="8.60374" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#64C2DB"/>
                  <stop offset="0.510417" stop-color="#7476ED"/>
                  <stop offset="1" stop-color="#E56F8C"/>
                  </linearGradient>
                  </defs>
                  </svg>
               </li>
               <li class="w-[12px]">
                  <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z" fill="#4F46E5"/>
                  </svg>
               </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name:'Accordion',
  data(){
    return {
      selectId: null,
      questions:[
        {
          select: null,
          quest: 'What is Echnge',
          answ: 'Providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. It’s important to look at factors such as supported as-sets, fees, payment methods, and security.'
        },
        {
          select: null,
          quest: 'What is Exhnge Protocol?',
          answ: 'If you want to buy or sell cryptocurrencies, opening an account with a crypto-currency exchange is a great way to start. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. It’s important to look at factors such as supported as-sets, fees, payment methods, and security.'
        },
        {
          select: null,
          quest: 'What is gas fee?',
          answ: 'Opening an account with a crypto-currency exchange is a great way to start. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. It’s important to look at factors such as supported as-sets, fees, payment methods, and security.'
        },
        {
          select: null,
          quest: 'What is Exhnge Token?',
          answ: 'If you want to buy or sell cryptocurrencies. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. It’s important to look at factors such as supported as-sets, fees, payment methods, and security.'
        }
      ],
    }
  },
  methods: {
    accordionHandler(id){
      this.selectId = id;
      for( let que in this.questions){
        if(id == que){
          this.questions[que].select = !this.questions[que].select
        }
      }
    }
  }
}
</script>

<style scoped>
    .select-accordion {
       max-height: 0;
       transition: .5s ease;
    }

    .select-accordion.sel {
      transition: .5s ease;
      max-height: 700px;
    }
</style>