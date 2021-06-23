import React from "react";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import { useState, useEffect } from "react";
import { Table, Container } from "semantic-ui-react";

export default function CurriculumVitaeList() {
  const [curriculumVitaes, setcurriculumVitaes] = useState([]);
  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getAll().then((result) => setcurriculumVitaes(result.data.data));
  });
  return (
    <div>
      <div>
        <Container>
          <Table fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Ad</Table.HeaderCell>
                <Table.HeaderCell>Soyad</Table.HeaderCell>
                <Table.HeaderCell>Deneyim</Table.HeaderCell>
                <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                <Table.HeaderCell>Dil</Table.HeaderCell>
                <Table.HeaderCell>Yetenekler</Table.HeaderCell>
                <Table.HeaderCell>Sosyal Medya</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {curriculumVitaes.map((curriculumVitae) => (
                <Table.Row key={curriculumVitae.id}>
                  <Table.Cell>{curriculumVitae.jobSeeker.firstName}</Table.Cell>
                  <Table.Cell>{curriculumVitae.jobSeeker.lastName}</Table.Cell>
                  <Table.Cell>{curriculumVitae.capabilities.name}</Table.Cell>
                  <Table.Cell>{curriculumVitae.language.language}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
      </div>
    </div>
  );
}
