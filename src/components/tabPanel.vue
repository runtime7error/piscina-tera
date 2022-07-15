<template>
  <div
    class="rounded border bg-gradient-to-b from-[#9faafd] flex flex-wrap m-5"
  >
    <ul id="tabs" ref="tabs" class="inline-flex pt-1 px-1 w-full border-b">
      <li
        class="bg-white px-2 text-[#7d47c9] font-semibold py-2 rounded-t border-t border-r border-l -mb-px"
      >
        <a id="default-tab" href="#first" class="text-black">Início</a>
      </li>
      <li class="px-2 text-gray-800 font-semibold py-2 rounded-t">
        <a href="#second" class="text-white">Informações</a>
      </li>
      <li class="px-2 text-gray-800 font-semibold py-2 rounded-t">
        <a href="#third" class="text-white">Requisitos do Sistema</a>
      </li>
    </ul>

    <div id="tab-contents">
      <div id="first" class="p-4 text-black">
        <div class="grid grid-cols-2 gap-4">
          <!-- Column 1 -->
          <div>
            <h1 class="text-xl">Tera Privado com PING Brasileiro!</h1>
            <h2>
              <b
                >Tenha o melhor ping para jogar com todas as classes do jeito
                que você nunca jogou!</b
              >
            </h2>
            Versão do jogo 100.02 64Bits, disponível proxy e módulos para a
            melhor experiência em jogo. Dungeons com HP, drops e recompensas
            editadas. Moeda Tikat contendo todas as skins e acessórios, obtida
            GRATUITAMENTE com recompensas diárias em Dungeons e Battlegrounds.
            Seja tão rico quanto o Akame!!! Ganhe scroll lvl 70, gear inicial e
            conjunto de joias já no primeiro nível.
          </div>
          <!-- Column 2 -->
          <div>
            <img src="../assets/images/01.jpg" class="rounded mb-10" />
            <img src="../assets/images/02.jpg" class="rounded mt-10" />
          </div>
        </div>
      </div>
      <div id="second" class="hidden p-4 text-black">
        <h1 class="text-xl"><b>Perguntas frequentes:</b></h1>
        <h2><b>Aonde é localizado o servidor?</b></h2>
        O servidor é localizado em São Paulo.
        <h2><b>Este é um servidor oficial?</b></h2>
        Não, este não é um servidor oficial! É um servidor privado mantido com
        ajuda dos colaboradores da comunidade de desenvolvimento de TERA, que
        tem o objetivo de manter o jogo vivo após o fechamento dos servidores no
        dia 30/06/2022.
        <h2>
          <b
            >Se eu tiver algum problema dentro do jogo como: excluir algum item
            sem querer?</b
          >
        </h2>
        Ninguém se responsabiliza por suas ações dentro do jogo, mas a
        administração (dentro do possível) tentará prestar suporte. O proxy é
        liberado neste servidor? Sim, o proxy é liberado dentro do jogo, porém
        módulos que sejam claramente prejudiciais ao jogo acarretaram em
        banimento permanente da conta.
        <h2><b>Posso comprar Tikats usando moeda real ?</b></h2>
        Não, nós não vendemos Tikats.
        <h2><b>Está é a versão final do servidor?</b></h2>
        Não, o servidor passará por atualizações dentro do necessário, isso
        reflete também na estabilidade da conexão do servidor.
      </div>
      <div id="third" class="hidden p-4 text-black">
        <h1><b>Requisitos do Sistema</b></h1>
        Os Requisitos do Sistema podem não ser o suficiente para rodar o jogo
        sem travamentos em qualidades baixas ou altas, dependendo de outros
        fatores do sistemas operacional e da maquina física.
        <div class="grid grid-cols-2">
          <div class="rounded bg-gradient-to-tr from-red-600 m-4">
            <div class="m-2">
              <h1><b>Mínimo:</b></h1>
              <h2><b>OS:</b>Windows® 7 (64-bit)</h2>
              <h2><b>Processador:</b> Intel i3 7100 / AMD Ryzen 3-1200</h2>
              <h2><b>RAM:</b> 8 GB</h2>
              <h2><b>Placa de vídeo:</b> GeForce GTX 760 / Radeon R9 280</h2>
              <h2><b>HD:</b> 80 GB de espaço livre</h2>
            </div>
          </div>
          <div class="rounded bg-gradient-to-tr from-green-600 m-4">
            <div class="m-2">
              <h1><b>Recomendado:</b></h1>
              <h2><b>OS:</b>Windows® 10 (64-bit)</h2>
              <h2><b>Processador:</b> Intel i5 7500 / AMD Ryzen 7-1700</h2>
              <h2><b>RAM:</b> 12 GB</h2>
              <h2><b>Placa de vídeo:</b> GeForce GTX 970 / Radeon R9 380</h2>
              <h2><b>HD:</b> 80 GB de espaço livre</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-[#7d47c9]">MD5 HASH: 05b83b28efb5683aa62f71596ed3da7b</p>
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
