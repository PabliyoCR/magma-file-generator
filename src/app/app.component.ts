import { Component } from '@angular/core';
import { Blockly, Button, Category, COLOUR_CATEGORY, CustomBlock, FUNCTIONS_CATEGORY, Label, LISTS_CATEGORY, LOGIC_CATEGORY, LOOP_CATEGORY, MATH_CATEGORY, NgxBlocklyConfig, NgxBlocklyGenerator, NgxBlocklyToolbox, Separator, TEXT_CATEGORY, VARIABLES_CATEGORY } from 'ngx-blockly';
import { ButtonBlock } from './blocks/bootstrap/buttons/buttons.block';
import { ToremBlock } from './blocks/utilities/toREM.block';
import { ELEMENT } from './shared/models/element.model';
import { BlocklyCommunicationService } from './shared/services/blockly-communication.service';
import { saveAs } from 'file-saver';
import { PROPERTY } from './shared/models/property.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public customBlocks: CustomBlock[] = [new ButtonBlock(), new ToremBlock()];
  public customUtilitiesBlocks: CustomBlock[] = [];

  elementSelected!: ELEMENT

  code: any

  public button: Button = new Button("asd", "asdasd");
  public label: Label = new Label("asd", "asdasd");

  constructor(private blocklyCommunication: BlocklyCommunicationService) {
    const workspace = new Blockly.WorkspaceSvg(new Blockly.Options({}));
    const toolbox: NgxBlocklyToolbox = new NgxBlocklyToolbox(workspace);
    toolbox.nodes = [
      new Category("bootstrap", "#653AA4", [
        this.customBlocks[0],
        this.button,
        this.label
      ]),
      new Category("utilities", "#aaafff", [
        this.customBlocks[1]
      ]),
      LOGIC_CATEGORY,
      LOOP_CATEGORY,
      MATH_CATEGORY,
      TEXT_CATEGORY,
      LISTS_CATEGORY,
      COLOUR_CATEGORY,
      new Separator(),
      VARIABLES_CATEGORY,
      FUNCTIONS_CATEGORY,
    ];
    this.config.toolbox = toolbox.toXML();
  }

  public config: NgxBlocklyConfig = {
    trashcan: true,
    generators: [
      NgxBlocklyGenerator.DART,
      NgxBlocklyGenerator.LUA,
      NgxBlocklyGenerator.JAVASCRIPT,
      NgxBlocklyGenerator.PHP,
      NgxBlocklyGenerator.PYTHON,
      NgxBlocklyGenerator.XML
    ],
    defaultBlocks: true,
    move: {
      scrollbars: true
    },
    plugins: {
      toolbox: NgxBlocklyToolbox
    },
  };

  onCode(codex: string) {
    //console.log(code);

    this.code = JSON.parse(codex);

    this.code.properties.forEach((prop: PROPERTY) => {
      document.documentElement.style.removeProperty(prop.property.replace('$', '--'))
    });

    this.code.properties.forEach((prop: PROPERTY) => {
      if (prop.enable) {
        document.documentElement.style.setProperty(prop.property.replace('$', '--'), prop.value);
      }
    });

    //document.documentElement.style.setProperty('--btn-padding-y', '100px');
  }

  toPrint() {
    let fileText = "";

    this.code.properties.forEach((prop: any) => {
      if (!prop.enable) {
        fileText += '//'
      }
      fileText += `${prop.property} : ${prop.value};\n`
    });
    var blob = new Blob([fileText], { type: "text/plain;charset=utf-8" });
    saveAs(blob, 'buttons' + ".scss");
  }

}
