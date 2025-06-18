function calcola() {
  const prezzo = parseFloat(document.getElementById('prezzo').value) || 0;
  const costo = parseFloat(document.getElementById('costo').value) || 0;
  const margine = parseFloat(document.getElementById('margine').value) || 0;
  const s1 = parseFloat(document.getElementById('sconto1').value) || 0;
  const s2 = parseFloat(document.getElementById('sconto2').value) || 0;
  const q = parseFloat(document.getElementById('quantita').value) || 1;

  const ricavoTotale = prezzo * q;
  const marginePercent = ((prezzo - costo) / prezzo) * 100;
  const ricaricoPercent = ((prezzo - costo) / costo) * 100;
  const prezzoDaMargine = costo / (1 - margine / 100);
  const prezzoNetto = prezzo * (1 - s1 / 100) * (1 - s2 / 100);

  const risultato = `
    🔸 Margine: ${marginePercent.toFixed(2)}%<br>
    🔸 Ricarico: ${ricaricoPercent.toFixed(2)}%<br>
    🔸 Prezzo da Margine: €${prezzoDaMargine.toFixed(2)}<br>
    🔸 Prezzo Netto con Sconti: €${prezzoNetto.toFixed(2)}<br>
    🔸 Ricavo Totale: €${ricavoTotale.toFixed(2)}
  `;

  document.getElementById('risultato').innerHTML = risultato;
}
