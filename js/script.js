/* =========================================================
   MOBILE NAVIGATION
   DigitalPro Header
========================================================= */

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");


/* =========================================================
   OPEN / CLOSE MOBILE MENU
========================================================= */

if (mobileMenuButton && mobileMenu && mobileMenuIcon) {

   mobileMenuButton.addEventListener("click", () => {

      const isOpen =
         mobileMenuButton.getAttribute("aria-expanded") === "true";


      if (isOpen) {

         /* Close menu */
         mobileMenu.classList.add("hidden");

         mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
         );

         mobileMenuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
         );

         mobileMenuIcon.classList.remove("fa-xmark");
         mobileMenuIcon.classList.add("fa-bars");

         mobileMenuIcon.classList.remove("rotate-90");

      } else {

         /* Open menu */
         mobileMenu.classList.remove("hidden");

         mobileMenuButton.setAttribute(
            "aria-expanded",
            "true"
         );

         mobileMenuButton.setAttribute(
            "aria-label",
            "Close navigation menu"
         );

         mobileMenuIcon.classList.remove("fa-bars");
         mobileMenuIcon.classList.add("fa-xmark");

         mobileMenuIcon.classList.add("rotate-90");

      }

   });

}


/* =========================================================
   CLOSE MENU WHEN A LINK IS CLICKED
========================================================= */

mobileNavLinks.forEach((link) => {

   link.addEventListener("click", () => {

      if (!mobileMenu || !mobileMenuButton || !mobileMenuIcon) {
         return;
      }


      mobileMenu.classList.add("hidden");

      mobileMenuButton.setAttribute(
         "aria-expanded",
         "false"
      );

      mobileMenuButton.setAttribute(
         "aria-label",
         "Open navigation menu"
      );

      mobileMenuIcon.classList.remove("fa-xmark");
      mobileMenuIcon.classList.add("fa-bars");

      mobileMenuIcon.classList.remove("rotate-90");

   });

});
/* /mobile-navigation */