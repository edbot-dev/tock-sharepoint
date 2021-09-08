import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Version} from '@microsoft/sp-core-library';
import {IPropertyPaneConfiguration, PropertyPaneTextField} from '@microsoft/sp-property-pane';
import {BaseClientSideWebPart} from '@microsoft/sp-webpart-base';

import * as strings from 'TockWebPartStrings';
import Tock from './components/Tock';

export interface ITockWebPartProps {
  endpoint: string;
}

export default class TockWebPart extends BaseClientSideWebPart<ITockWebPartProps> {

  public render(): void {
    ReactDom.render(
      <Tock endpoint={this.properties.endpoint}
            context={this.context}/>
      , this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataWPVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('endpoint', {
                  label: strings.EndpointFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
