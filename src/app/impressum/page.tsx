
export default function Imprint() {
  return (
    <main className="flex flex-col lg:max-w-4xl xl:max-w-6xl lg:mx-auto min-h-screen lg:px-0 px-4 pt-12 pb-32 dark:bg-[#171717] text-slate-800 dark:text-slate-100 font-sans">

      <h1 className="my-16 text-6xl tracking-tighter font-serif italic font-light">
        Impressum
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3">

        <div className="pb-8">
          <h4 className="mb-2 font-serif text-2xl font-light italic">
            Adresse
          </h4>

          <h6 className="font-medium mt-2">RheinesEvent GmbH</h6>
          <p>
            Hafenbahn 8,<br/>
            48431 Rheine
          </p>

          <h6 className="font-medium mt-2">Vetreten durch</h6>
          <p>
            Robert Graefe,<br/>
            Burkhart Trommer
          </p>
        </div>

        <div className="pb-16">
          <h4 className="mb-2 font-serif text-2xl font-light italic">
            Kontakt
          </h4>

          <h6 className="font-medium">Email</h6>
          <p>info@rheines-event.de</p>

          <h6 className="font-medium mt-2">Telefon</h6>
          <p>+49 (0) 173 9525696</p>
        </div>

        <div className="pb-8">
          <h4 className="mb-2 font-serif text-2xl font-light italic">
            Gesetzliches
          </h4>

          <h6 className="font-medium">Umsatzsteuer-Id</h6>
          <p>723116</p>

          <h6 className="font-medium mt-2">Amtsgericht</h6>
          <p>Amtsgericht Rheine</p>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="mb-6 font-serif text-2xl font-light italic">
          Disclaimer & Rechtliche Hinweise
        </h4>

        <h6 className="my-2 font-medium">Haftung für Inhalte</h6>
        <p className="mb-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.<br/>
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br/>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
          Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h6 className="my-2 font-medium">Haftung für Links</h6>
        <p className="mb-4">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h6 className="my-2 font-medium">Urheberrecht</h6>
        <p className="mb-4">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
          Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
          Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>

      </div>

      <div className="mt-8">
        <h4 className="mb-2 font-serif text-2xl font-light italic">
          Drittanbieter Lizenzen
        </h4>

        <h6 className="mt-6 mb-2 text-lg font-medium">Icons</h6>
        <p className="mt-4">
          <span className="font-medium">Heroicons</span> (<a href="https://heroicons.com/" target="_blank" rel="noopener noreferrer">https://heroicons.com/</a>)
        </p>
        <p className="mb-6">Lizensiert unter:</p>
        <p className="text-sm italic">
          MIT License
          <br/><br/>
          Copyright (c) 2020 Refactoring UI Inc.
          <br/><br/>
          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
          <br/><br/>
          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.
          <br/><br/>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
        </p>
      </div>

    </main>
  )
}
