Vad är CDN och monitorering
CDN som koncept är (som jag förstår det iallafall) helt enkelt att
man undviker att en användare kopplar upp DIREKT mot servern som hostar
webbtjänsten, och istället förlitar sig på ett nätverk av s.k CDN edge servers.
dessa servrar cachar(cachear?) kopior av serverns data och när en användare kopplar
upp mot din webbtjänst så kan CDN hjälpa genom att titta vart användaren
tittar på webbtjänsten ifrån, och välja en cachead kopia som ligger närmre.
Detta hjälper bägge med prestanda och sparar energi åt bägge håll. Monitorering
är att man kollar på en webbtjänsts prestandad i "real time" för att kunna
avgöra om saker går/har gått/är på väg att gå snett, eller tracka mängden
aktivitet mot webbtjänsten - eller kanske något så enkelt som att tracka
response time för att kunna avgöra om t.ex en CDN hade behövts för att
förbättra webbtjänsten mot vissa kundbaser.
Det mest relevanta exemplet jag kan tänka mig i sammanhanget av den här
inlämningen är typ server monitorering, där man kollar nätverksprestanda och
hur mycket CPU servern tar upp för att kunna se om ens hårdvara/mjukvara
i kombination räcker till mot ens kundbemötande.
