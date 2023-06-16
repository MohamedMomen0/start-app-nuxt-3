<template>
  <div class="stageProgress">
    <h4>{{ title }}</h4>
    <div class="statges">
      <div
        class="statge"
        :class="{
          finshed: stage.status == 'finished',
          _progress: stage.status == 'pending',
        }"
        v-for="stage in stages"
        :key="stage.id"
      >
        <div
          class="content"
          :title="
            stage.status == 'pending' && false ? stage.percentage + '%' : ''
          "
        >
          <div class="icon">
            <i
              v-if="stage.status == 'wating'"
              class="fal fa-exclamation-circle"
            ></i>
            <i v-if="stage.status == 'pending'" class="fad fa-spinner"></i>
            <i v-if="stage.status == 'finished'" class="fa fa-check"></i>
          </div>
          <span class="dashedLine"></span>
        </div>

        <h6 class="h6">{{ stage.name }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stages: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.stageProgress {
  margin-top: 40px;

  h4 {
    color: #949494;
  }

  .statges {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    .statge {
      width: fit-content;

      &.finshed {
        .content {
          .icon {
            color: green;
            border-color: green;
          }

          .dashedLine {
            border-color: green;
          }
        }

        h6 {
          color: green;
        }
      }

      &._progress {
        .content {
          .icon {
            color: #ff840b;
            border-color: #ff840b;
            animation: rotation 3s linear infinite;
          }

          .dashedLine {
            border-color: #ff840b;
          }
        }

        h6 {
          color: #ff840b;
        }
      }

      &:last-child {
        .content {
          .dashedLine {
            display: none;
          }
        }
      }

      .content {
        display: flex;
        align-items: center;

        .icon {
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin-bottom: 10px;
          border: 3.5px solid var(--inputBorder);
          color: var(--paraColor);

          i {
            font-size: 40px;
            color: inherit;
          }
        }

        .dashedLine {
          display: block;
          width: 100px;
          height: 1px;
          border-top: 2px dashed var(--inputBorder);
        }
      }

      h6 {
        color: var(--paraColor);
      }

      @media (max-width: 700px) {
        .content {
          .icon {
            width: 40px;
            height: 40px;
            border-width: 3px;

            i {
              font-size: 20px;
            }
          }

          .dashedLine {
            width: 63px;
          }
        }
        h6 {
          max-width: 63px;
        }
      }
    }
  }
}
</style>
