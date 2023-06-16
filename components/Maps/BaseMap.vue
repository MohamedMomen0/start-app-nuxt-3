<template>
  <section class="baseMap col-12 py-0">
    <GmapMap
      v-if="marker && marker.lat"
      :center="marker"
      :zoom="zoom"
      :options="mapStyle"
      map-type-id="terrain"
      :style="{ width: '100%', height: height + 'px' }"
      @click="updateLocation"
    >
      <!-- ========= Custom Marker -->
      <gmap-custom-marker
        :marker="marker"
        @click.native="showWindow"
        alignment="top"
        :offsetX="0"
        :offsetY="0"
      >
        <div class="customeMarker">
          <div class="img">
            <img src="@/assets/media/icons/location_marker.png" />
          </div>
        </div>
      </gmap-custom-marker>
    </GmapMap>

    <div class="disabledMap" v-else></div>
  </section>
</template>

<script>
import GmapCustomMarker from "vue2-gmap-custom-marker";
import { gmapApi } from "vue2-google-maps";

export default {
  components: { "gmap-custom-marker": GmapCustomMarker },

  props: {
    zoom: {
      type: Number,
      default: 12,
      required: false,
    },
    path: {
      type: Array,
      required: false,
    },
    strokeColor: {
      type: String,
      required: false,
      default: "#1A73E8",
    },
    height: {
      type: String,
      required: false,
      default: "500",
    },
    marker: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      mapStyle: {},
    };
  },

  methods: {
    showWindow() {
      // this.marker.windowActive = !this.marker.windowActive;
    },

    filterAddressNameData(results) {
      let result = results.filter((data) => {
        return data.types.includes("administrative_area_level_1");
      });

      if (result.length > 0) {
        return result[0].formatted_address;
      }
    },

    async updateLocation(e) {
      let response = await gmapApi().maps.Geocoder.prototype.geocode({
        location: e.latLng,
      });
      let new_marker = {
        address: this.filterAddressNameData(response.results),
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };

      this.$emit("updateLocation", new_marker);
    },
  },
};
</script>

<style lang="scss">
.baseMap {
  position: relative;
  width: 100%;
  margin: 15px auto;
  margin: 0;

  .feature.map {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    iframe {
      height: 100%;
      width: 100%;
      border: 0;
      filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 10+ */
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(99%); /* Chrome 19+ & Safari 6+ */
      -webkit-backface-visibility: hidden; /* Fix for transition flickering */
    }
  }
  .vue-map-container {
    height: 100%;
    position: relative;
    inset: 0;
    width: 100%;
    height: 100%;

    .vue-map {
      border-radius: 10px;
    }

    .customeMarker {
      position: relative;

      .img {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          height: 100;
          border-radius: 50%;
          object-fit: contain;
        }
      }

      .markerWindow {
        position: absolute;
        top: -106px;
        background: #333;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: #fff;
        border-radius: 15px;
        text-align: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease-in;
        &.active {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
}

.disabledMap {
  width: 100%;
  margin: 15px auto;
  height: 500px;
  background: #e5e3df;
}
</style>
