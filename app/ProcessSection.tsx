type Step = {
  number: string;
  title: string;
  body: string;
  steps: string[];
  output: string;
};

const process: Step[] = [
  {
    number: "01",
    title: "Разбираюсь в продукте",
    body:
      "Начинаем с брифа и ваших материалов. Дальше изучаю сам продукт, рекламный рынок и конкурентов — и только после этого пишу офферы по JTBD, а под них статичные и видеокреативы.",
    steps: ["Бриф", "Продукт", "Рынок", "Конкуренты", "Офферы по JTBD", "Креативы"],
    output: "Готовые офферы и креативы под них",
  },
  {
    number: "02",
    title: "Запускаю и считаю эффективность",
    body:
      "Связываю рекламу с вашими продажами, поэтому смотрю не на цифры из рекламного кабинета, а на то, какой креатив и какие настройки кампании приносят квалифицированных лидов и окупаемость.",
    steps: ["Запуск", "Связка с CRM", "Тесты", "Квалифицированные лиды", "Окупаемость"],
    output: "Понимание, какая реклама приносит деньги",
  },
  {
    number: "03",
    title: "Масштабирую то, что работает",
    body:
      "Усиливаю связки, которые уже окупаются, и отключаю то, что не работает. Всю отчётность вывожу в дашборд — вы смотрите на неё в любой момент, а не ждёте конца месяца.",
    steps: ["Рабочие связки", "Рост бюджета", "Новые гипотезы", "Дашборд"],
    output: "Дашборд с отчётностью и растущие связки",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-heading">
        <h2 id="process-title">Как я работаю</h2>
        <p>Три этапа. От брифа до связок, которые окупаются.</p>
      </div>

      <ol className="process-list">
        {process.map((step) => (
          <li className="process-step" key={step.number}>
            <p className="process-number" aria-hidden="true">{step.number}</p>
            <h3>{step.title}</h3>
            <p className="process-body">{step.body}</p>

            <ul className="process-chips" aria-label={`Что входит в этап ${step.number}`}>
              {step.steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="process-output">
              <span>На выходе</span>
              {step.output}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
