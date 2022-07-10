import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportPBI',
  templateUrl: './reportPBI.component.html',
  styleUrls: ['./reportPBI.style.css']
})
export class ReportPBIComponent implements OnInit {

  token = ""
  reportId = ""
  groupId = ""
  pageName = ""
  url = "" 

  constructor( private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((value) => {
      this.loadPowerBI();
    });
};

  ngOnInit() {
    this.loadPowerBI();
  }

  loadPowerBI() {
    this.token = String(this.route.snapshot.paramMap.get('token'));
    this.reportId = String(this.route.snapshot.paramMap.get('reportId'));
    this.groupId = String(this.route.snapshot.paramMap.get('groupId'));
    this.pageName = String(this.route.snapshot.paramMap.get('pageName'));

    this.url = "./assets/powerBi.html?token=" + this.token + "&reportId=" + this.reportId + "&groupId=" + this.groupId + "&pageName=" + this.pageName;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 