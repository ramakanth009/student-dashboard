// module1.jsx
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ModuleDropdown from "../../../Elements/Moduledropdown/moduledropdown";
import ModuleSwitcher from "../../../Elements/Moduleselector/moduleselector";
import ModuleDescription from "../../../Elements/Moduledescription/moduledescription";

// Module content based on track
const moduleContent = {
  fullStack: {
    title: "Introduction to Programming",
    subtitle: "Learn the basics of software development",
    description:
      "This introductory programming module covers the core principles of writing and understanding code. You'll learn essential programming concepts, syntax, and logic to build simple programs.",
    learningOutcomes: [
      "→ Understand the fundamentals of programming languages",
      "→ Write basic algorithms using variables, data types, and operators",
      "→ Implement control structures like loops and conditionals",
      "→ Gain hands-on experience in problem-solving with code",
      "→ Build simple programs that demonstrate logic and structure",
    ],
    prerequisites: [
      "→ Basic computer literacy",
      "→ Familiarity with text editors",
      "→ Problem-solving mindset",
    ],
    duration: "3 weeks",
    skillLevel: "Beginner",
    highlightText:
      "Upon completing the program, you will be able to write simple programs and understand core programming concepts and logic",
    sections: [
      {
        title: "1.1 Basics of Programming",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video1",
        topics: [
          "What is Programming?",
          "Programming Languages",
          "Syntax and Semantics",
          "Variables and Constants",
          "Data Types",
          "Operators",
          "Input and Output",
          "Control Structures (Conditionals)",
          "Introduction to Functions",
        ],
      },
      {
        title: "1.2 Loops and Functions",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video2",
        topics: ["While loops", "Patterns", "For loops"],
      },
      {
        title: "1.3 Arrays",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: ["Introduction to arrays", "Searching and Sorting"],
      },
      {
        title: "2 Strings and 2D Arrays",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: [
          "Strings",
          "2D Arrays",
          "Foreach loops,",
          "continue and break statements of the loops",
        ],
      },
      {
        title: "3 Problem Solving Techniques",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: ["Recursion", "Time and space complexity"],
      },
    ],
  },
  dataScience: {
    title: "Generative AI",
    subtitle: "Creating AI-Generated Content",
    description:
      "Explore the cutting-edge field of generative AI. Learn to work with large language models, diffusion models, and other generative architectures.",
    learningOutcomes: [
      "Understand generative model architectures",
      "Work with large language models",
      "Implement image generation models",
      "Fine-tune pre-trained generative models",
      "Deploy generative AI applications",
    ],
    prerequisites: [
      "Deep learning and NLP fundamentals",
      "Advanced Python programming skills",
    ],
    duration: "4 weeks",
    skillLevel: "Advanced",
    highlightText:
      "Upon completion, you'll be able to develop and deploy state-of-the-art generative AI applications.",
    sections: [
      {
        title: "What are Generative Models?",
        status: "Completed",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Definition and purpose of generative models in AI.",
          "Types of generative models: GANs (Generative Adversarial Networks), VAEs (Variational Autoencoders), and LLMs (Large Language Models).",
          "Key applications: Text generation, image generation, data synthesis.",
        ],
      },
      {
        title: "Overview of GANs",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Basic components: Generator and Discriminator.",
          "How GANs work: The adversarial process.",
          "Types of GAN architectures and their applications (e.g., StyleGAN, CycleGAN).",
          "GANs for Text Generation",
          "Using GANs for generating human-like text.",
          "Comparison with other text generation models like LLMs.",
        ],
      },
      {
        title: "Applications of GANs",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Text-to-image generation (e.g., GANs in art creation).",
          "Image super-resolution and data augmentation using GANs.",
          "Techniques for improving the quality of generated text.",
        ],
      },
      {
        title: "Introduction to Autoencoders and VAEs",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Basic structure: Encoder, latent space, and decoder.",
          "Use of VAEs in data compression and generative tasks.",
          "Advanced Applications of Autoencoders and VAEs",
          "Use in data compression, anomaly detection, and unsupervised learning.",
          "Variational Autoencoders for generating images and text.",
        ],
      },
      {
        title: "Introduction to LLMs",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "What are LLMs?",
          "Definition, history, and development of Large Language Models (LLMs) like GPT-3, GPT-4, BERT, and T5.",
          "How LLMs are trained: Pre-training and fine-tuning using massive datasets.",
          "Text generation using LLMs: Autoregressive models and context-based predictions.",
        ],
      },
      {
        title: "Transformer Architecture in LLMs",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to the Transformer model: Encoder-decoder structure, attention mechanism.",
          "Key components: Self-attention, Multi-head attention, Positional encoding.",
          "How transformers power LLMs and improve performance in natural language tasks.",
        ],
      },
      {
        title: "Pre-trained Language Models",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "GPT Models (Generative Pre-trained Transformers)",
          "Overview of GPT models (e.g., GPT-2, GPT-3, GPT-4).",
          "Use cases: Text generation, language understanding, summarization.",
          "BERT (Bidirectional Encoder Representations from Transformers)",
          "Difference between GPT and BERT: BERT’s focus on understanding rather than generation.",
          "Applications: Sentiment analysis, question answering, and named entity recognition.",
          "T5 (Text-to-Text Transfer Transformer)",
          "Treating all tasks as text-to-text problems: Translation, summarization, and classification.",
        ],
      },
      {
        title: "Applications of LLMs in Generative AI",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Text Generation and Completion",
          "Using LLMs to generate coherent and contextually relevant text, such as poetry, stories, and articles.",
          "Applications in chatbot development, content creation, and automated writing.",
          "Text-to-Text Transformation",
          "Tasks such as translation, summarization, paraphrasing, and question answering using LLMs.",
          "Pre-training LLMs to handle various NLP tasks without task-specific fine-tuning.",
          "Fine-Tuning and Customization",
          "How LLMs can be fine-tuned on domain-specific data (e.g., medical, legal, etc.) for specialized applications.",
          "Techniques for improving performance on niche tasks using custom datasets.",
          "Ethics and Challenges in Generative AI and LLMs",
          "Challenges: Bias in language models, ethical concerns in text generation, and misuse of technology.",
          "Addressing issues: Fairness, accountability, and transparency in generative AI.",
        ],
      },
      {
        title: "Feature Learning and Evaluation Techniques",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Feature Learning in Generative AI",

          "Techniques used by GANs and VAEs for feature extraction and learning latent representations.",
          "How LLMs also learn latent semantic features of language data for text generation and understanding.",

          "Evaluation Metrics for Generative Models",

          "Metrics for GANs: Inception score, Fréchet Inception Distance (FID).",
          "Metrics for text generation models: Perplexity, BLEU score, ROUGE score.",
        ],
      },
    ],
  },
};

const useStyles = makeStyles({
  moduleContainer: {
    width: "100%",
    padding: "24px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    gap: "24px",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      gap: "16px",
    },
  },
  header: {
    marginBottom: "24px",
  },
  moduleTitle: {
    color: "#333",
    fontWeight: "500!important",
    marginBottom: "24px!important",
    "@media (max-width: 768px)": {
      fontSize: "1.75rem!important",
      marginBottom: "16px!important",
    },
  },
  contentWrapper: {
    width: "100%",
    padding: "0px 20px",
    "@media (max-width: 768px)": {
      padding: "0px",
    },
  },
});

const Module8 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const userTrack = localStorage.getItem("userTrack") || "fullStack";
  const content = moduleContent[userTrack];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module8" />
        <Typography variant="h4" className={classes.moduleTitle}>
          {content.title}
        </Typography>
      </Box>

      <Box className={classes.content}>
        <ModuleDescription
          moduleData={{
            title: content.title,
            subtitle: content.subtitle,
            description: content.description,
            learningOutcomes: content.learningOutcomes,
            prerequisites: content.prerequisites,
            duration: content.duration,
            skillLevel: content.skillLevel,
            highlightText: content.highlightText,
          }}
        />

        <Box className={classes.contentWrapper}>
          <Box className={classes.dropdownSection}>
            {content.sections.map((section, index) => (
              <ModuleDropdown
                key={index}
                index={index}
                title={section.title}
                status={section.status}
                topics={section.topics}
                videoUrl={section.videoUrl}
                slidesUrl={section.slidesUrl}
                expanded={expandedIndex === index}
                onChange={handleAccordionChange}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Module8;
