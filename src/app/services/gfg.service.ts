import { Injectable } from '@angular/core';
import { Team } from '../shared/models/Team';
import { core_team } from 'src/data/teamdata/core_team';
import { cp_team } from 'src/data/teamdata/cp';
import { design_team } from 'src/data/teamdata/design';
import { event_team } from 'src/data/teamdata/event';
import { marketing_team } from 'src/data/teamdata/marketing';
import { Pro_team } from 'src/data/teamdata/Pro';
import { social_team } from 'src/data/teamdata/socialmedia';
import { technical_team } from 'src/data/teamdata/tecnical';
import { web_team } from 'src/data/teamdata/web';
@Injectable({
  providedIn: 'root'
})
export class GFGService {

  constructor() { }
  getCoreTeam():Team[]{
    return core_team;
  }
  getCpTeam():Team[]{
    return cp_team;
  }
  getDesignTeam():Team[]{
     return design_team;
  }
  getEventTeam():Team[]{
    return event_team;
  }
  getMarketingTeam():Team[]{
    return marketing_team;
  }
  getProTeam():Team[]{
    return Pro_team;
  }
  getSocialMediaTeam():Team[]{
    return social_team;
  }
  getTechTeam():Team[]{
    return technical_team;
  }
  getWebTeam():Team[]{
    return web_team;
  }
}
