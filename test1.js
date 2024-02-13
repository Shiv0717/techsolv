let  outsideClick = function (e) {
   let container =  document.getElementsByClassName(".customDrp")
   if (!container.is(e.target) && container.has(e.target).length === 0 && container.is(':visible')) {
      container.classList.remove("active");
      document.removeEventListener("click", outsideClick);
   }
};

 (document).ready(function () {
   document.getElementsByClassName(".custmonDropDwon").click(function (e) {
      if ($(e.target).classList.contains("crossString") || $(e.target).classList.contains("bowiro")) {
         return false;
      }

      if ($(e.target).is("a")) {
         return true;
      }

      e.preventDefault();

      console.log(e.target);

      if ($(e.target).classList.contains("language") || $(e.target).parent().classList.contains("language")) {
         languageFunc();

      }

      if (window.matchMedia('(max-width: 1170px)').matches) {
         document.body.style.overflow = 'hidden';
      }

      if ($(e.target).classList.contains("searchCoinDrp")) {
         document.getElementById('tokensearch1').focus();
      }

      if (this.next(".customDrp").length) {
         this.next(".customDrp").classList.add("active");
      } else {
         this.children(".customDrp").classList.add("active");
      }

      e.stopPropagation();
      document.addEventListener("click", outsideClick);
   });

   let basic_banner_read_btn = false;
   document.getElementsByClassName(".basic_banner_read_btn").click(function () {
      if (basic_banner_read_btn == false) {
         this.innerText="Read Less";
         document.getElementsByClassName(".basic_banner_text").slideToggle(500);
         basic_banner_read_btn = true;
      } else {
         document.getElementsByClassName(".basic_banner_text").slideToggle(500);
         this.innerText="Read More";
         basic_banner_read_btn = false;
      }
   });

   document.getElementsByClassName(".filterToggelBtn").click(function () {
      document.getElementsByClassName(".filterToggel").slideToggle("active");
   });

   document.getElementsByClassName(".hideCustomDrp").on("click", function () {
      document.getElementsByClassName(".customDrp").classList.remove("active");
   });

   document.getElementsByClassName(".closeIcon").click(function () {
      document.getElementsByClassName(".customPopup").classList.remove("active");
      document.getElementsByClassName(".commonPopup").classList.remove("active");

      if (!document.querySelector(".headerMain").classList.contains("active")) {
         document.body.style.overflow = 'auto';
      }
   });

   document.getElementsByClassName(".mainTable").on("scroll", function (e) {
      let isScroll = e.currentTarget.scrollLeft;
      if (isScroll) {
         $(".ListingTable th:nth-child(3), td:nth-child(3)").classList.add("before");
      } else {
         $(".ListingTable th:nth-child(3), td:nth-child(3)").classList.remove("before");
      }
   });
});
