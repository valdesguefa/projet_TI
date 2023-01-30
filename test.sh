curl http://localhost:3000/customers -H "Accept: application/json"
curl http://localhost:3000/customers --data "email=borel@gmail.com&name=borel&password=123456"
curl -X DELETE http://localhost:3000/customers/1
#curl -X DELETE http://localhost:3000/customers
#curl http://localhost:3000/customers -H "Accept: application/json"
curl http://localhost:3000/soutenances -H "Accept: application/json"
curl http://localhost:3000/soutenances --data "id_user=1&name_souteneur=borel&president_jury=Bouetou&id_salle=1&theme=optimisation&heure_debut='12/06.2023 10h00'"
curl -X DELETE http://localhost:3000/soutenances/1
curl http://localhost:3000/salles -H "Accept: application/json"
curl http://localhost:3000/salles --data "name='salle des actes'&status=0&position='l=2123,L=2231'"
curl -X DELETE http://localhost:3000/salles/1
curl http://localhost:3000/connexions -H "Accept: application/json"
curl http://localhost:3000/connexions --data "status=0&position='l=212 L=21332'"
curl -X DELETE http://localhost:3000/connexions/1
