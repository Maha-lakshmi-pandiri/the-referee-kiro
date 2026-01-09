###### -> The Referee – Constraint-Based AWS Decision Helper



The Referee is a constraint-based decision tool that helps users choose between AWS Lambda and AWS EC2 by clearly explaining trade-offs, pros, cons, efficiency, and reasoning instead of giving a single generic recommendation.



This project was built for the Kiro Hero – Week 6 Challenge (“The Referee”), where the goal is to help users make informed decisions, not just consume information.



###### -> Problem Statement



Choosing the right AWS compute service is confusing for beginners and even intermediate developers.



Most tools:

\- Give one-size-fits-all recommendations

\- Ignore user constraints

\- Do not explain why one option is better than another



As a result, users struggle to understand trade-offs between AWS Lambda and EC2.



###### -> Solution



The Referee solves this by using a constraint-based comparison approach.



Instead of saying “Use EC2” or “Use Lambda”, the tool:

\- Evaluates user-selected constraints

\- Explains why one option fits better

\- Clearly shows pros, cons, trade-offs, and efficiency



The goal is to guide users toward the right decision, not decide for them.



###### -> How It Works



Users select constraints such as:

\- Traffic Volume (Low / Medium / High)

\- Latency Sensitivity (Low / Medium / High)



Based on these inputs, the tool dynamically displays:

\- Recommended service (Lambda or EC2)

\- Pros

\- Cons

\- Trade-offs

\- Efficiency explanation



Every change in constraints produces a meaningful and different result.



###### -> Role of Kiro



Kiro accelerated development by:

\- Helping define clear decision rules

\- Structuring multiple comparison scenarios

\- Improving trade-off clarity

\- Ensuring consistent reasoning across combinations



Kiro enabled faster iteration and a decision-first design mindset.



###### -> Tech Stack



\- HTML

\- CSS

\- JavaScript

\- Kiro



###### -> Repository Structure



the-referee-kiro/

├── index.html

├── script.js

├── README.md

└── .kiro/



###### -> How to Run



1\. Clone the repository

2\. Open index.html in a browser

3\. Select constraints and click Compare



###### -> Final Note



The Referee helps users think through cloud decisions instead of blindly following recommendations, aligning perfectly with the Kiro Hero challenge goal.



