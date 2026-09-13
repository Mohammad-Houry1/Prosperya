import Metric from "../common/Metric.jsx";
export default function CaseStudyMetric({ metric, inverse = false }) {
  return <Metric metric={metric} inverse={inverse} />;
}
