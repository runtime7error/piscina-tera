<template>
  <div
    class="backgroundCentralDiv flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover self-center"
  >
    <div class="-mt-48">
      <div class="text-center text-[#ECF0F1] text-2xl rounded-lg mx-20 sm:mx-40 lg:mx-72" style="border-radius: 100%">
        <p class="mr-10 ml-10 backdropbackdrop-blur-xl" style="text-shadow: 2px 2px 7px #000000">
          Tera Privado com PING Brasileiro! Tenha o melhor ping para jogar com
          todas as classes do jeito que você nunca jogou!
        </p>
        <button
          class="text-white rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-[#98B9F2] bg-[#918EF4] border-[#6F9CEB] items-center my-4"
        >
          Baixe Agora!
        </button>
      </div>
      <div class="mt-5 mb-5 flex flex-wrap bg-white text-lg">
        <p>
          Versão do jogo 100.02 64Bits, disponível proxy e módulos para a melhor
          experiência em jogo. Dungeons com HP, drops e recompensas editadas.
          Moeda Tikat contendo todas as skins e acessórios, obtida GRATUITAMENTE
          com recompensas diárias em Dungeons e Battlegrounds. Seja tão rico
          quanto o Akame!!! Ganhe scroll lvl 70, gear inicial e conjunto de
          joias já no primeiro nível.
        </p>
        <p class="text-black">MD5 HASH: 05b83b28efb5683aa62f71596ed3da7b</p>
      </div>
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
};
</script>

<style scoped>
.backgroundCentralDiv {
  background-image: url("../assets/images/wallpaper.jfif");
  background-repeat: no-repeat;
}
</style>
