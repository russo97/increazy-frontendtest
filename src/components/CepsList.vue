<template>
  <div class="ceplist">
    <ul v-if="cepList.length" class="ceplist__wrapper">
      <li v-for="cep in cepList" :key="cep" class="ceplist__item d-flex align-items-center">
        <figure>
          <img src="../assets/icons/icone-lugar.svg" alt="icone lugar" />
        </figure>

        <strong>
          CEP <span class="cep-number">{{ cep }}</span>
        </strong>
      </li>
    </ul>

    <div v-else class="empty-warning">
      Nenhum CEP adicionado :(
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "CepsList",

    computed: {
      ...mapState([
        'cepList'
      ])
    }
  }
</script>

<style lang="scss">
  .ceplist {
    &__wrapper,
    .empty-warning {
      margin-top: 58px;
    }

    .empty-warning {
      margin-top: 58px;
      color: var(--red1);
      font: 500 1.25rem "Open Sans", sans-serif;
    }

    &__item {
      color: var(--black);

      & + .ceplist__item {
        margin: 19px 0 0;
      }

      strong {
        margin: 0 0 0 30px;
        font: 700 1.25rem / 1.6875rem "Open Sans", sans-serif;
      }

      .cep-number {
        color: var(--gray4);
      }
    }

    @media (max-width: 768px) {
      .empty-warning {
        text-align: center;
      }

      &__wrapper,
      .empty-warning {
        max-width: 293px;
        margin-inline: auto;
      }
    }
  }
</style>