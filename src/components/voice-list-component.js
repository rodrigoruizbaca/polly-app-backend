import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const list = [
    {value:"Ivy", text: "Ivy [English - American]"},
    {value:"Joanna", text: "Joanna [English - American]"},
    {value:"Joey", text: "Joey [English - American]"},
    {value:"Justin", text: "Justin [English - American]"},
    {value:"Kendra", text: "Kendra [English - American] "},
    {value:"Kimberly", text: "Kimberly [English - American]"},
    {value:"Salli", text: "Salli [English - American]"},
    {value:"Nicole", text: "Nicole [English - Australian]"},
    {value:"Russell", text: "Russell [English - Australian]"},
    {value:"Emma", text: "Emma [English - British]"},
    {value:"Brian", text: "Brian [English - British]"},
    {value:"Amy", text: "Amy [English - British]"},
    {value:"Raveena", text: "Raveena [English - Indian]        "},
    {value:"Geraint", text: "Geraint [English - Welsh]"},
    {value:"Ricardo", text: "Ricardo [Brazilian Portuguese]"},
    {value:"Vitória", text: "Vitória [Brazilian Portuguese]"},
    {value:"Lotte", text: "Lotte [Dutch]"},
    {value:"Ruben", text: "Ruben [Dutch]"},
    {value:"Mathieu", text: "Mathieu [French]"},
    {value:"Céline", text: "Céline [French]"},
    {value:"Chantal", text: "Chantal [Canadian French]"},
    {value:"Marlene", text: "Marlene [German]"},
    {value:"Dóra", text: "Dóra [Icelandic]"},
    {value:"Karl", text: "Karl [Icelandic]"},
    {value:"Carla", text: "Carla [Italian]"},
    {value:"Giorgio", text: "Giorgio [Italian]"},
    {value:"Mizuki", text: "Mizuki [Japanese]"},
    {value:"Liv", text: "Liv [Norwegian]"},
    {value:"Maja", text: "Maja [Polish]"},
    {value:"Jan", text: "Jan [Polish]"},
    {value:"Ewa", text: "Ewa [Polish]"},
    {value:"Cristiano", text: "Cristiano [Portuquese]"},
    {value:"Inês", text: "Inês [Portuquese]"},
    {value:"Carmen", text: "Carmen [Romanian]"},
    {value:"Maxim", text: "Maxim [Russian]"},
    {value:"Tatyana", text: "Tatyana [Russian]"},
    {value:"Enrique", text: "Enrique [Spanish]"},
    {value:"Penélope", text: "Penélope [US Spanish]"},
    {value:"Enrique", text: "Miguel [US Spanish]"},
    {value:"Conchita", text: "Conchita [Castilian Spanish]"},
    {value:"Astrid", text: "Astrid [Swedish]"},
    {value:"Filiz", text: "Filiz [Turkish]"},
    {value:"Gwyneth", text: "Gwyneth [Welsh]"}
];

const VoiceListComponent = () => (
    <Dropdown placeholder='Select Vpice' fluid search selection options={list} />
);

export default VoiceListComponent;