function compare() {
  const traffic = document.getElementById("traffic").value;
  const latency = document.getElementById("latency").value;
  const output = document.getElementById("output");

  let html = "";

  /* 1️⃣ LOW TRAFFIC + LOW LATENCY */
  if (traffic === "low" && latency === "low") {
    html = `
    <div class="result lambda">
      <h3>✅ Select: AWS Lambda</h3>

      <b>Pros</b>
      <ul>
        <li>No idle cost for low traffic</li>
        <li>Automatic scaling</li>
      </ul>

      <b>Cons</b>
      <ul>
        <li>Limited execution time</li>
      </ul>

      <b>Trade-offs</b>
      <ul>
        <li>Slight startup delay accepted</li>
      </ul>

      <b>Efficiency</b>
      <p>Best cost-efficient solution for infrequent workloads.</p>
    </div>`;
  }

  /* 2️⃣ LOW TRAFFIC + HIGH LATENCY */
  else if (traffic === "low" && latency === "high") {
    html = `
    <div class="result ec2">
      <h3>✅ Select: AWS EC2</h3>

      <b>Pros</b>
      <ul>
        <li>No cold start latency</li>
        <li>Consistent response time</li>
      </ul>

      <b>Cons</b>
      <ul>
        <li>Paying for idle resources</li>
      </ul>

      <b>Trade-offs</b>
      <ul>
        <li>Higher cost for better latency</li>
      </ul>

      <b>Efficiency</b>
      <p>Latency-critical systems justify EC2 cost.</p>
    </div>`;
  }

  /* 3️⃣ MEDIUM TRAFFIC + LOW LATENCY */
  else if (traffic === "medium" && latency === "low") {
    html = `
    <div class="result lambda">
      <h3>✅ Select: AWS Lambda</h3>

      <b>Pros</b>
      <ul>
        <li>Handles traffic spikes well</li>
        <li>No infrastructure management</li>
      </ul>

      <b>Cons</b>
      <ul>
        <li>Cost increases with usage</li>
      </ul>

      <b>Trade-offs</b>
      <ul>
        <li>Pay-per-request vs control</li>
      </ul>

      <b>Efficiency</b>
      <p>Balanced performance with minimal ops effort.</p>
    </div>`;
  }

  /* 4️⃣ MEDIUM TRAFFIC + HIGH LATENCY */
  else if (traffic === "medium" && latency === "high") {
    html = `
    <div class="result ec2">
      <h3>✅ Select: AWS EC2</h3>

      <b>Pros</b>
      <ul>
        <li>Stable latency</li>
        <li>Auto-scaling supported</li>
      </ul>

      <b>Cons</b>
      <ul>
        <li>Requires monitoring and tuning</li>
      </ul>

      <b>Trade-offs</b>
      <ul>
        <li>Operational overhead vs performance</li>
      </ul>

      <b>Efficiency</b>
      <p>Predictable latency outweighs management cost.</p>
    </div>`;
  }

  /* 5️⃣ HIGH TRAFFIC + LOW LATENCY */
  else if (traffic === "high" && latency === "low") {
    html = `
    <div class="result ec2">
      <h3>✅ Select: AWS EC2</h3>

      <b>Pros</b>
      <ul>
        <li>Cost-effective at scale</li>
        <li>No per-request billing</li>
      </ul>

      <b>Cons</b>
      <ul>
        <li>Scaling configuration required</li>
      </ul>

      <b>Trade-offs</b>
      <ul>
        <li>Manual scaling vs predictable cost</li>
      </ul>

      <b>Efficiency</b>
      <p>Best for sustained heavy workloads.</p>
    </div>`;
  }

  /* 6️⃣ HIGH TRAFFIC + HIGH LATENCY */
  else if (traffic === "high" && latency === "high") {
    html = `
    <div class="result ec2">
      <h3>✅ Select: AWS EC2</h3>

      <b>Pros</b>
      <ul>
        <li>Maximum performance</li>
        <li>No cold start delay</li>
      </ul>

      <b>Cons</b>
      <ul>
        <li>Higher infrastructure cost</li>
      </ul>

      <b>Trade-offs</b>
      <ul>
        <li>Cost sacrificed for reliability</li>
      </ul>

      <b>Efficiency</b>
      <p>Mission-critical systems demand EC2.</p>
    </div>`;
  }

  output.innerHTML = html;
}
