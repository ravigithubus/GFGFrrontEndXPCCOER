import { Component } from '@angular/core';
import { GFGService } from 'src/app/services/gfg.service';
@Component({
  selector: 'app-team-leads-page',
  templateUrl: './team-leads-page.component.html',
  styleUrls: ['./team-leads-page.component.css']
})
export class TeamLeadsPageComponent {
    team!:any[];
    TeamINFO!:string;
    constructor(private gfgservice:GFGService){}
    ngOnInit():void{
        this.team=this.gfgservice.getCoreTeam();
        this.TeamINFO='core';
    }
    getCoreTeam(){
      this.team=this.gfgservice.getCoreTeam();
      this.TeamINFO='core';
    }
    getCpInfo(){
      this.team=this.gfgservice.getCpTeam();
      this.TeamINFO='cp';
    }

    getDesignTeamInfo(){
      this.team=this.gfgservice.getDesignTeam();
      this.TeamINFO='design';
    }
    getEventTeamInfo(){
      this.team=this.gfgservice.getEventTeam();
      this.TeamINFO='event';
    }
    getMarketingTeamInfo(){
      this.team=this.gfgservice.getMarketingTeam();
      this.TeamINFO='market';
    }
    getPromotionTeamInfo(){
      this.team=this.gfgservice.getProTeam();
      this.TeamINFO='pro';
    }
    getSocialMediaTeamInfo(){
      this.team=this.gfgservice.getSocialMediaTeam();
      this.TeamINFO='social';
    }
    getTeachnicalTeamInfo(){
      this.team=this.gfgservice.getTechTeam();
      this.TeamINFO='tech';
    }
    getWebTeamInfo(){
      this.team=this.gfgservice.getWebTeam();
      this.TeamINFO='web';
    }
}
