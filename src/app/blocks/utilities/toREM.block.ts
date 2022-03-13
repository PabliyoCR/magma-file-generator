import { Blockly, CustomBlock } from "ngx-blockly";
import { PROPERTY } from "src/app/shared/models/property.model";

export class ToremBlock extends CustomBlock {

    currentElement!: string

    constructor() {
        super("torem_block");
        this.class = ToremBlock;
    }

    public defineBlock() {

        this.block.appendDummyInput()
            .appendField('toREM')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldNumber)

        this.block.setOutput(true, 'String');
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

        this.block.setColour("#aaafff")
    }

    public toJavaScriptCode(block: Blockly.Block): string | any[] {

       /*  const button = document.createElement("button");
        button.innerText = "Button";
        button.className = 'btn btn-primary';

        const preview = document.querySelector('#preview');
        if (preview) {
            preview.innerHTML = ''
        }
        preview?.appendChild(button);

        var code: { properties: PROPERTY[] } = { properties: [] }

        block.inputList.forEach((input, i) => {
            if (i != 0) {
                var prop: PROPERTY = { property: input.fieldRow[1].value_, value: input.fieldRow[2].value_, enable: input.fieldRow[0].value_ === true };
                code.properties.push(prop)
            }
        })

        var codex = JSON.stringify(code) */
        //return block.getFieldValue('users');
        return 'codex'
    }

    onChange(changeEvent: Blockly.Events.Change) {

       /*  const event: any = changeEvent.toJson()

        if (event.type) {
            const block = document.querySelector('.blocklySelected');
            this.currentElement = block?.querySelector('.blocklyText')?.innerHTML || ''
            //console.log(type?.innerHTML);
            this.toJavaScriptCode(this.block)
        } */
    }
}
