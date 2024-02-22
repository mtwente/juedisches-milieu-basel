export const queryTabs = [
  {
    name: 'Jüdische Handwerker und Israelit. Männerverein Dowor Tow',
    sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_1719422',
    query: `
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX ontome: <https://ontome.net/ontology/>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
  PREFIX geov: <http://geovistory.org/resource/>
      SELECT
      (SAMPLE(?buildingLabel) as ?label)
      (CONCAT(
      '[',
          GROUP_CONCAT(CONCAT('{"label":"',?persName,'", "url":"',str(?person),'?p=1719422"}'); separator=', '),
          ']'
      ) as ?children)

      ?long ?lat ?link ?type
      (count(?link) * 0.5 as ?radius)
      WHERE {

      # Construction -had presence-> Presence -was at-> Place (lat/long)
      ?building ontome:p147i/ontome:p148 ?place.

      # Construction -label-> label
      ?building rdfs:label ?buildingLabel.

      # Construction -is location of-> Legal location of an Actor
      ?building ontome:p1851i ?location.

      # -is social quality of -> Person
      ?location ontome:p1411 ?person.

      ?person ontome:p1188i/ontome:p1189 ?group.
      ?group rdfs:label ?type.
      FILTER(?group = geov:i1972234 || ?group = geov:i1929590).

      # Person -label-> persName
      ?person rdfs:label ?persName.

      # Extract lat and long from WKT
      bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
      bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
      bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

      # Append the project query param to the URI
      bind(concat(str(?building), "?p=1719422") as ?link )


      }
      GROUP BY ?building ?long ?lat ?type ?link

      `,
  }
]
