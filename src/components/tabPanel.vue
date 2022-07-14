<template>
  <div class="rounded border bg-gray-800 flex flex-wrap m-5">
    <ul id="tabs" ref="tabs" class="inline-flex pt-2 px-1 w-full border-b">
      <li
        class="bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px"
      >
        <a id="default-tab" href="#first" class="text-black">Início</a>
      </li>
      <li class="px-4 text-gray-800 font-semibold py-2 rounded-t">
        <a href="#second" class="text-white">Informações</a>
      </li>
      <li class="px-4 text-gray-800 font-semibold py-2 rounded-t">
        <a href="#third" class="text-white">Requisitos do Sistema</a>
      </li>
    </ul>

    <div id="tab-contents">
      <div id="first" class="p-4 text-white">First tab</div>
      <div id="second" class="hidden p-4 text-white">Second tab</div>
      <div id="third" class="hidden p-4 text-white">Third tab</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabPanel",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  mounted() {
    let tabsContainer = document.querySelector("#tabs");

    let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

    tabTogglers.forEach(function (toggler) {
      toggler.addEventListener("click", function (e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {
          tabTogglers[i].parentElement.classList.remove(
            "border-t",
            "border-r",
            "border-l",
            "-mb-px",
            "bg-white"
          );
          tabTogglers[0].classList.remove("text-black");
          tabTogglers[0].classList.add("text-white");
          tabTogglers[i].classList.remove("text-black");
          tabContents.children[i].classList.remove("hidden");
          if ("#" + tabContents.children[i].id === tabName) {
            continue;
          }
          tabContents.children[i].classList.add("hidden");
        }
        e.target.classList.add("text-black");
        e.target.parentElement.classList.add(
          "border-t",
          "border-r",
          "border-l",
          "-mb-px",
          "bg-white"
        );
      });
    });
  },
};
</script>
