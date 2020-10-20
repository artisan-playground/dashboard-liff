<template>
  <div>
    <div align="left" style="margin-left:18px; margin-bottom:20px; font-size:20px; font-weight:550">Event</div>

    <div class="news">
      <v-card id="card" align="left" v-for="data in news" :key="data.id">
        <div>
          <v-row style="margin:auto; padding:auto;">
          <!-- Date -->
          <v-col cols="2" id="date" style="margin-bottom:auto; margin-top:auto; padding-left: 8%;">
            <v-row style="color:#8F8F8F;">
              <span style="text-align: center;">{{data.day}}</span>
            </v-row>
            <v-row>
              <div><b style="text-align: center;">{{ data.date }}</b></div>
            </v-row>
            <v-row style="color:#8F8F8F">
              <div>{{ data.month }}</div>
            
            </v-row>
          </v-col>
          <!-- End Date -->

          <!-- vertical line -->
          <v-col cols="1" class="vl"></v-col>

          <!-- Description -->
          <v-col cols="9" style="padding-left:0px; padding-top:0px; padding-bottom:0px;">
            <v-row>
              <!-- Description Event -->
              <v-col cols="7" style="padding-left:0px;">
                <div>
                  <b>{{ data.name }}</b>
                </div>
                <!-- <v-row>
                  {{
                    data.description
                  }}
                </v-row> -->
              </v-col>

              <!-- Important Icon -->
              <v-col cols="5">
                <a-tag
                  style="float:right;"
                  v-if="data.status == 'Important'"
                  color="orange"
                >
                  <span
                    id="iconStatus"
                    class="iconify"
                    data-inline="false"
                    data-icon="bi:bookmark"
                    style="font-size: 14px;"
                  ></span>

                  {{ data.status }}
                </a-tag>
              </v-col>
            </v-row>

            <!-- Description Event -->
            
              <v-row>
                {{ data.description }}
              </v-row>
            

            <!-- Member -->
            <v-row style="float:right; padding-left:10px;">
              <v-col>
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
              </v-col>
              
            </v-row>
          </v-col>
        </v-row>
        </div>
        
      </v-card>
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
  padding-bottom: 5px;
}
#card {
  margin: 3px 15px 24px 15px; /* ระยะห่างรอบๆ card */
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
  /* vertical-align: middle; */
}
.vl {
  border-left: 0.5px solid grey;
}
</style>
