import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;

  constructor() {

  }
}
