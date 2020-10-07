<template>
  <div>
    <div>
      <table style="width:100%; margin-bottom:10px">
        <div style="margin-left:18px">
          <td align="left" style="font-size:20px; font-weight:550">Project</td>
        </div>

        <td align="right">
          <a-input-search
            v-model="search"
            type="search"
            placeholder="input search text"
            style="width: 50%"
          />
          &nbsp;
          <a-select v-model="currentFilter" style="width: 28%; margin-right:18px;">
            <a-select-option value="">
              <span style="font-size:10px">All</span>
            </a-select-option>
            <a-select-option value="WIP">
              <span style="font-size:10px">WIP</span>
            </a-select-option>
            <a-select-option value="Done">
              <span style="font-size:10px">Done</span>
            </a-select-option>
          </a-select>
        </td>
      </table>
    </div>
    <div class="listProject">
      <v-card
        style="text-decoration:none; color:black"
        id="card"
        align="left"
        v-for="list in searchFilter"
        :key="list.id"
        :to="{ name: 'project', params: { id: list.id } }"
      >
        <div>
          <table>
            <td align="left" style="width:75% ">
              <md-card-header id="title">
                <div class="md-title">
                  <b style="line-height: 0px;">
                    <!-- <router-link :to="`/project/${list.id}`">{{ list.name }}</router-link> -->
                    {{ list.name }}
                  </b>
                </div>
              </md-card-header>
              <md-card-content id="position">{{ list.position }}</md-card-content>
            </td>
            <td id="status" align="right">
              <md-chip
                class="md-accent"
                md-clickable
                v-if="list.status == 'WIP'"
                style="background-color:#F77B72; color:black; font-size: 11px; width:60.27px; text-align:center; font-weight:500;"
              >
                <span
                  id="iconStatus"
                  class="iconify"
                  data-inline="false"
                  data-icon="carbon:warning"
                ></span>
                {{ list.status }}
              </md-chip>
              <md-chip
                v-if="list.status == 'Done'"
                style="background-color:#4DD987; color:black; font-size: 11px; font-weight:500;"
              >
                <span
                  id="iconStatus"
                  class="iconify"
                  data-inline="false"
                  data-icon="octicon:check-circle-24"
                ></span>
                {{ list.status }}
              </md-chip>
            </td>
          </table>
          <md-card-content style="padding-top: 8px;">
            <table>
              <tr>
                <div>{{ list.description }}</div>
              </tr>

              <!-- list member -->
              <vs-avatar-group float max="4" style="float:right; margin-top:10px;">
                <vs-avatar
                  v-for="member in members"
                  :key="member.id"
                  style="border-radius: 100%; margin-left:3px; width:33px; height:33px;"
                >
                  <img v-bind:src="member.image" />
                </vs-avatar>
              </vs-avatar-group>
            </table>
          </md-card-content>
        </div>
      </v-card>
    </div>
    <div style="padding-bottom:90px">
      <!-- ระยะห่าง manu ข้างล่างกับ content -->
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'
export default {
  name: 'ListProjectAll',
  data() {
    return {
      search: '',
      projects: store.state.projects,
      members: store.state.members,
      currentFilter: '',
    }
  },
  computed: {
    searchFilter() {
      let text = this.search.trim()
      let filterStatus = this.currentFilter.trim()

      return this.projects.filter(item => {
        let filtered = true
        if (filterStatus && filterStatus.length > 0) {
          filtered = item.status == filterStatus
          return filtered
        } else {
          return item.name.indexOf(text) > -1
        }
      })
    },

    // selectFilter() {
    //   let filterStatus = this.currentFilter.trim()
    //   return this.lists.filter(status => {
    //     let filtered = true
    //     if (filterStatus && filterStatus.length > 0) {
    //       filtered = status.status == filterStatus
    //     }
    //     return filtered
    //   })
    // },
  },
  // methods: {
  //   viewProject(projectid) {
  //     this.$router.push({ name: 'project', params: { id: list.id } })
  //   },
  // },
}
</script>

<style scoped>
.listProject {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-bottom: 2px;
  font-family: 'Roboto';
}
table {
  border: none;
  width: 100%;
  padding-bottom: 0px;
}

#title {
  padding-bottom: 0px;
  font-size: 16px;
}
#position {
  color: #8f8f8f;
  font-size: 12px;
  margin-top: 0px;
  padding-bottom: 0px;
}
#status {
  font-size: 10.5px;
  padding-right: 16px;
  width: 25%;
}

#iconStatus {
  font-size: 10px;
  vertical-align: -4.57%;
}

#card {
  margin: 3px 15px 24px 15px; /* ระยะห่างรอบๆ card */
  border-radius: 5px;
}

.md-title {
  font-size: 16px;
  margin-bottom: -1px; /* ระยะห่างระหว่างชื่อโปรเจคกับตำแหน่งงาน */
  line-height: 20px; /* ระยะห่างระหว่างบรรทัดของชื่อโปรเจค เวลาขึ้นบรรทัดใหม่ */
}
</style>
