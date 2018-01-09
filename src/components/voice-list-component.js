import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const list = [
    {key:"Ivy", value:"Ivy", text: "Ivy [English - American]"},
    {key:"Joanna", value:"Joanna", text: "Joanna [English - American]"},
    {key:"Joey", value:"Joey", text: "Joey [English - American]"},
    {key:"Justin", value:"Justin", text: "Justin [English - American]"},
    {key:"Kendra", value:"Kendra", text: "Kendra [English - American] "},
    {key:"Kimberly", text: "Kimberly [English - American]"},
    {key:"Salli", value:"Salli", text: "Salli [English - American]"},
    {key:"Nicole", value:"Nicole", text: "Nicole [English - Australian]"},
    {key:"Russell", text: "Russell [English - Australian]"},
    {key:"Emma", text: "Emma [English - British]"},
    {key:"Brian", text: "Brian [English - British]"},
    {key:"Amy", text: "Amy [English - British]"},
    {key:"Raveena", value:"Raveena", text: "Raveena [English - Indian]        "},
    {key:"Geraint", tvalue:"Geraint", text: "Geraint [English - Welsh]"},
    {key:"Ricardo", value:"Ricardo", text: "Ricardo [Brazilian Portuguese]"},
    {key:"Vitória", value:"Vitória", text: "Vitória [Brazilian Portuguese]"},
    {key:"Lotte", value:"Lotte", text: "Lotte [Dutch]"},
    {key:"Ruben", value:"Ruben", text: "Ruben [Dutch]"},
    {key:"Mathieu", value:"Mathieu", text: "Mathieu [French]"},
    {key:"Céline", value:"Céline", text: "Céline [French]"},
    {key:"Chantal", value:"Chantal", text: "Chantal [Canadian French]"},
    {key:"Marlene", value:"Marlene", text: "Marlene [German]"},
    {key:"Dóra", value:"Dóra", text: "Dóra [Icelandic]"},
    {key:"Karl", value:"Karl", text: "Karl [Icelandic]"},
    {key:"Carla", value:"Carla", text: "Carla [Italian]"},
    {key:"Giorgio", value:"Giorgio", text: "Giorgio [Italian]"},
    {key:"Mizuki", value:"Mizuki", text: "Mizuki [Japanese]"},
    {key:"Maja", value:"Maja", text: "Maja [Polish]"},
    {key:"Jan", value:"Jan", text: "Jan [Polish]"},
    {key:"Ewa", value:"Ewa", text: "Ewa [Polish]"},
    {key:"Cristiano", value:"Cristiano", text: "Cristiano [Portuquese]"},
    {key:"Inês", value:"Inês", text: "Inês [Portuquese]"},
    {key:"Carmen", value:"Carmen", text: "Carmen [Romanian]"},
    {key:"Maxim", value:"Maxim", text: "Maxim [Russian]"},
    {key:"Tatyana", value:"Tatyana", text: "Tatyana [Russian]"},
    {key:"Penélope", value:"Penélope", text: "Penélope [US Spanish]"},
    {key:"Enrique", value:"Enrique", text: "Miguel [US Spanish]"},
    {key:"Conchita", value:"Conchita", text: "Conchita [Castilian Spanish]"},
    {key:"Astrid", value:"Astrid", text: "Astrid [Swedish]"},
    {key:"Filiz", value:"Filiz", text: "Filiz [Turkish]"},
    {key:"Gwyneth", value:"Gwyneth", text: "Gwyneth [Welsh]"}
];

const VoiceListComponent = (props) => (
    <Dropdown onChange={(event, data) => {props.onChangeVoice({"value": data.value})}} placeholder='Select Vpice' fluid search selection options={list} />
);

export default VoiceListComponent;