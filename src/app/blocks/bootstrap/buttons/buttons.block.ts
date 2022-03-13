import { Blockly, CustomBlock } from "ngx-blockly";
import { PROPERTY } from "src/app/shared/models/property.model";

export class ButtonBlock extends CustomBlock {
    variables: { property: string; value: string; type: string; }[];
    currentElement!: string

    constructor() {
        super("button_block");
        this.class = ButtonBlock;
        this.variables =
            [
                {
                    "property": "$btn-padding-y",
                    "value": "$input-btn-padding-y",
                    "type": "number"
                },
                {
                    "property": "$btn-padding-x",
                    "value": "$input-btn-padding-x",
                    "type": "text"
                },
                {
                    "property": "$btn-font-family",
                    "value": "$input-btn-font-family",
                    "type": "text"
                },
                {
                    "property": "$btn-font-size",
                    "value": "$input-btn-font-size",
                    "type": "text"
                },
                {
                    "property": "$btn-line-height",
                    "value": "$input-btn-line-height",
                    "type": "text"
                },
                {
                    "property": "$btn-white-space",
                    "value": "null",
                    "type": "text"
                },
                {
                    "property": "$btn-padding-y-sm",
                    "value": "$input-btn-padding-y-sm",
                    "type": "text"
                },
                {
                    "property": "$btn-padding-x-sm",
                    "value": "$input-btn-padding-x-sm",
                    "type": "text"
                },
                {
                    "property": "$btn-font-size-sm",
                    "value": "$input-btn-font-size-sm",
                    "type": "text"
                },
                {
                    "property": "$btn-padding-y-lg",
                    "value": "$input-btn-padding-y-lg",
                    "type": "text"
                },
                {
                    "property": "$btn-padding-x-lg",
                    "value": "$input-btn-padding-x-lg",
                    "type": "text"
                },
                {
                    "property": "$btn-font-size-lg",
                    "value": "$input-btn-font-size-lg",
                    "type": "text"
                },
                {
                    "property": "$btn-border-width",
                    "value": "$input-btn-border-width",
                    "type": "text"
                },
                {
                    "property": "$btn-font-weight",
                    "value": "$font-weight-normal",
                    "type": "text"
                },
                {
                    "property": "$btn-box-shadow",
                    "value": "inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075)",
                    "type": "text"
                },
                {
                    "property": "$btn-focus-width",
                    "value": "$input-btn-focus-width",
                    "type": "text"
                },
                {
                    "property": "$btn-focus-box-shadow",
                    "value": "$input-btn-focus-box-shadow",
                    "type": "text"
                },
                {
                    "property": "$btn-disabled-opacity",
                    "value": ".65",
                    "type": "text"
                },
                {
                    "property": "$btn-active-box-shadow",
                    "value": "inset 0 3px 5px rgba($black, .125)",
                    "type": "text"
                },
                {
                    "property": "$btn-link-color",
                    "value": "$link-color",
                    "type": "text"
                },
                {
                    "property": "$btn-link-hover-color",
                    "value": "$link-hover-color",
                    "type": "text"
                },
                {
                    "property": "$btn-link-disabled-color",
                    "value": "$gray-600",
                    "type": "text"
                },
                {
                    "property": "$btn-border-radius",
                    "value": "$border-radius",
                    "type": "text"
                },
                {
                    "property": "$btn-border-radius-sm",
                    "value": "$border-radius-sm",
                    "type": "text"
                },
                {
                    "property": "$btn-border-radius-lg",
                    "value": "$border-radius-lg",
                    "type": "text"
                },
                {
                    "property": "$btn-transition",
                    "value": "color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out",
                    "type": "text"
                },
                {
                    "property": "$btn-hover-bg-shade-amount",
                    "value": "15%",
                    "type": "text"
                },
                {
                    "property": "$btn-hover-bg-tint-amount",
                    "value": "15%",
                    "type": "text"
                },
                {
                    "property": "$btn-hover-border-shade-amount",
                    "value": "20%",
                    "type": "text"
                },
                {
                    "property": "$btn-hover-border-tint-amount",
                    "value": "10%",
                    "type": "text"
                },
                {
                    "property": "$btn-active-bg-shade-amount",
                    "value": "20%",
                    "type": "text"
                },
                {
                    "property": "$btn-active-bg-tint-amount",
                    "value": "20%",
                    "type": "text"
                },
                {
                    "property": "$btn-active-border-shade-amount",
                    "value": "25%",
                    "type": "text"
                },
                {
                    "property": "$btn-active-border-tint-amount",
                    "value": "10%",
                    "type": "text"
                }
            ]
        /* variables.forEach(variable => {
            console.log(variable.property);
        }) */
    }

    public defineBlock() {

        this.block.appendDummyInput()
            .appendField('Button')
            .setAlign(Blockly.ALIGN_CENTRE);

        this.variables.forEach(variable => {
            if(variable.type == 'number'){
                this.block.appendValueInput('Number')
                    .setCheck(['String', 'Array'])
                    .appendField(new Blockly.FieldCheckbox())
                    .appendField(variable.property)
            }
            if(variable.type == 'text'){
                this.block.appendDummyInput()
                    .appendField(new Blockly.FieldCheckbox())
                    .appendField(variable.property)
                   .appendField(new Blockly.FieldTextInput(variable.value), variable.property);
            }
        })

        /* this.block.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox())
            .appendField('user')
            .appendField(new Blockly.FieldTextInput('    '), 'users'); */

        /* this.block.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('length of');
        this.block.appendDummyInput()
            .appendField("number:")
            .appendField(new Blockly.FieldNumber(100, 0, 100, 10), 'FIELDNAME'); */

        this.block.setColour("#653AA4")
    }

    public toJavaScriptCode(block: Blockly.Block): string | any[] {

        const button = document.createElement("button");
        button.innerText = "Button";
        button.className = 'btn btn-primary';

        const preview = document.querySelector('#preview');
        if (preview) {
            preview.innerHTML = ''
        }
        preview?.appendChild(button);

        var code: { properties: PROPERTY[] } = { properties: [] }

        block.inputList.forEach((input, i) => {
            if (i != 0 && input.fieldRow[2]) {
                console.log(input);
                var prop: PROPERTY = { property: input.fieldRow[1].value_, value: input.fieldRow[2].value_, enable: input.fieldRow[0].value_ === true };
                code.properties.push(prop)
            }
        })

        var codex = JSON.stringify(code)
        //return block.getFieldValue('users');
        return codex
    }

    onChange(changeEvent: Blockly.Events.Change) {

        const event: any = changeEvent.toJson()

        if (event.type) {
            const block = document.querySelector('.blocklySelected');
            this.currentElement = block?.querySelector('.blocklyText')?.innerHTML || ''
            //console.log(type?.innerHTML);
            this.toJavaScriptCode(this.block)
        }
    }
}
