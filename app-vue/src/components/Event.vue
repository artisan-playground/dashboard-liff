<template>
  <div>
    <div>
      <table style="width:100%; margin-bottom:10px">
        <div style="margin-left:18px">
          <td align="left" style="font-size:20px; font-weight:550">Event</td>
        </div>
        <td align="right"></td>
      </table>
    </div>

    <div class="news">
      <md-card id="card" align="left" v-for="data in news" :key="data.id">
        <table style="width:100% ">
          <!-- Date -->
          <td style="width:20%" id="date">
            <center>
              <tr style="color:#8F8F8F">
                {{
                  data.day
                }}
              </tr>
              <tr>
                <b>{{ data.date }}</b>
              </tr>
              <tr style="color:#8F8F8F">
                {{
                  data.month
                }}
              </tr>
            </center>
          </td>
          <!-- End Date -->

          <!-- vertical line -->
          <td class="vl"></td>

          <!-- Description -->
          <td style="width:80%; padding-left:10px">
            <tr>
              <!-- Description Event -->
              <td style="width:75%; vertical-align: bottom; ">
                <div>
                  <b style="line-height:1px">{{ data.name }}</b>
                </div>
                <!-- <tr>
                  {{
                    data.description
                  }}
                </tr> -->
              </td>

              <!-- Important Icon -->
              <td align="right" style="width:5%;">
                <md-chip
                  class="md-accent"
                  md-clickable
                  v-if="data.status == 'Important'"
                  style="margin:10px 5px 5px 5px ; background-color:#FFE24D; color:black; font-size: 11px; width:90px; text-align:center; font-weight:550;"
                >
                  <span
                    id="iconStatus"
                    class="iconify"
                    data-inline="false"
                    data-icon="bi:bookmark"
                    style="font-size: 14px;"
                  ></span>

                  {{ data.status }}
                </md-chip>
              </td>
            </tr>

            <!-- Description Event -->
            <div>
              <td style="width:80%;">
                {{ data.description }}
              </td>
            </div>

            <!-- Member -->
            <tr style="float:right; padding-left:10px;">
              <vs-avatar-group
                float
                max="4"
                style="margin-top:5px; margin-bottom:14px; margin-right: 5px;"
              >
                <vs-avatar
                  v-for="member in members"
                  :key="member.id"
                  style="border-radius: 100%; margin-left:3px; width:33px; height:33px;"
                >
                  <img v-bind:src="member.image" />
                </vs-avatar>
              </vs-avatar-group>
            </tr>
          </td>
        </table>
      </md-card>
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'
export default {
  name: 'Event',

  data() {
    return {
      news: store.state.news,
      members: store.state.members,
    }
  },
}
</script>

<style scoped>
div {
  font-family: 'Roboto';
}
.news {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-bottom: 5px;
}
#card {
  margin: 3px 15px 24px 15px; /* ระยะห่างรอบๆ card */
  border-radius: 5px;
}
#profileImg {
  width: 33px;
  border-radius: 100px;
  margin-right: 4px;
}
#iconStatus {
  font-size: 10px;
  vertical-align: -9%;
}
#date {
  vertical-align: middle;
}
.vl {
  border-left: 0.5px solid grey;
}
</style>
