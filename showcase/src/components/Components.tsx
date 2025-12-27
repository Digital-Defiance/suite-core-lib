import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Components.css";

interface Feature {
  title: string;
  description: string;
  icon: string;
  tech: string[];
  highlights: string[];
  category: "Core" | "Interfaces" | "Security" | "Errors" | "Builders";
}

const features: Feature[] = [
  {
    title: "Type-Safe Base Interfaces",
    icon: "🏗️",
    description:
      "Generic interfaces for users, roles, and permissions that adapt to any ID type (ObjectId, UUID, string, number). Perfect for MongoDB, SQL databases, or frontend applications.",
    tech: ["TypeScript", "Generics", "Type Safety"],
    category: "Interfaces",
    highlights: [
      "IUserBase<TId, TDate, TLanguage, TAccountStatus> - Flexible user interface",
      "IRoleBase<TId, TDate, TRole> - Role definition interface",
      "IUserRoleBase<TId, TDate, TRole> - User-role association interface",
      "Works with MongoDB ObjectId, UUID strings, or custom ID types",
      "Seamless integration between frontend and backend",
    ],
  },
  {
    title: "Cryptographic Backup Codes",
    icon: "🔑",
    description:
      "Generate and validate cryptographically-secure backup codes for account recovery. Supports multiple encoding formats and normalized validation.",
    tech: ["Crypto", "Web Crypto API", "TypeScript"],
    category: "Security",
    highlights: [
      "BackupCodeString class with secure random generation",
      "Multiple formats: Hex, Base64, Uint8Array",
      "Normalized code comparison (case-insensitive, delimiter-tolerant)",
      "Configurable code count via Constants.BACKUP_CODES",
      "Formatted display with hyphens (dead-beef-cafe-babe...)",
    ],
  },
  {
    title: "Localized Error Handling",
    icon: "🌍",
    description:
      "Comprehensive error classes with built-in internationalization support. All errors include localized messages in 5 languages and extend CoreTypedHandleableError.",
    tech: ["i18n", "TypeScript", "Error Handling"],
    category: "Errors",
    highlights: [
      "30+ specialized error classes (UserNotFound, AccountLocked, etc.)",
      "Support for English, French, Spanish, Chinese, Ukrainian",
      "CoreTypedHandleableError base class with type information",
      "Automatic localization based on CoreLanguage parameter",
      "Consistent error handling across entire application",
    ],
  },
  {
    title: "Role-Based Access Control",
    icon: "👥",
    description:
      "Complete RBAC primitives with role enumerations, permission management, and fine-grained access control. Foundation for secure multi-user applications.",
    tech: ["RBAC", "TypeScript", "Security"],
    category: "Core",
    highlights: [
      "Role enumeration (Admin, Member, Guest, etc.)",
      "Permission-based access control abstractions",
      "User-role association interfaces",
      "Extensible role definitions for custom roles",
      "Designed for Express middleware and route guards",
    ],
  },
  {
    title: "Fluent Builder APIs",
    icon: "⚙️",
    description:
      "Type-safe builder pattern implementations for users and roles. Simplify object creation with chainable methods and validation.",
    tech: ["TypeScript", "Builder Pattern", "Fluent API"],
    category: "Builders",
    highlights: [
      "UserBuilder - Fluent API for user object creation",
      "RoleBuilder - Chainable role definition builder",
      "Type-safe method chaining with TypeScript",
      "Built-in validation and error handling",
      "Reduces boilerplate in user/role management code",
    ],
  },
  {
    title: "Account Status Management",
    icon: "📊",
    description:
      "Comprehensive account status enumeration for managing user lifecycle. From pending verification to admin locks and everything in between.",
    tech: ["TypeScript", "Enumerations"],
    category: "Core",
    highlights: [
      "PendingEmailVerification - New user awaiting confirmation",
      "Active - Fully verified and active account",
      "AdminLock - Administrator-imposed account suspension",
      "Suspended, Banned - Various restriction levels",
      "Supports complex account lifecycle workflows",
    ],
  },
  {
    title: "Email Token System",
    icon: "📧",
    description:
      "Email token type enumerations for verification, password reset, and recovery workflows. Foundation for secure email-based operations.",
    tech: ["TypeScript", "Security", "Authentication"],
    category: "Security",
    highlights: [
      "AccountVerification - Email confirmation tokens",
      "PasswordReset - Secure password reset workflow",
      "LoginRequest - Passwordless authentication tokens",
      "PrivateKeyRequest - Cryptographic key recovery",
      "MnemonicRecoveryRequest - BIP39 mnemonic recovery",
    ],
  },
  {
    title: "Zero-Knowledge Authentication",
    icon: "🛡️",
    description:
      "Core primitives and interfaces for implementing zero-knowledge proof based authentication. Challenge-response flow foundations.",
    tech: ["Zero-Knowledge Proofs", "Cryptography", "TypeScript"],
    category: "Security",
    highlights: [
      "Challenge-response authentication interfaces",
      "DirectChallengeNotEnabled error for security enforcement",
      "InvalidChallengeResponse validation errors",
      "LoginChallengeExpired timeout handling",
      "Foundation for secure, password-less authentication",
    ],
  },
];

const Components = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="components section" id="components" ref={ref}>
      <motion.div
        className="components-container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Core <span className="gradient-text">Features</span> & Building Blocks
        </h2>
        <p className="components-subtitle">
          Foundational primitives and abstractions that power secure user management systems
        </p>

        <motion.div
          className="suite-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>
            The <em>foundation</em> for building <em>secure</em>, <em>type-safe</em>, and{" "}
            <em>internationalized</em> user management systems.
          </h3>
          <p>
            <strong>
              @digitaldefiance/suite-core-lib provides the essential building blocks
            </strong>{" "}
            for creating cryptographically-secure user management systems. From
            type-safe interfaces that work with any database to localized error
            handling in multiple languages, this library offers{" "}
            <strong>everything you need</strong> to build secure, scalable applications
            with confidence.
          </p>
          <div className="problem-solution">
            <div className="problem">
              <h4>❌ The Challenge: User Management Is Complex</h4>
              <ul>
                <li>Type-safe models that work with different databases</li>
                <li>Cryptographically-secure backup code generation</li>
                <li>Localized error messages for global applications</li>
                <li>Role-based access control (RBAC) primitives</li>
                <li>Zero-knowledge authentication foundations</li>
              </ul>
              <p>
                <strong>Result:</strong> You spend time building infrastructure
                instead of your core features.
              </p>
            </div>
            <div className="solution">
              <h4>✅ The Solution: Comprehensive Core Primitives</h4>
              <p>
                <strong>suite-core-lib</strong> provides{" "}
                <strong>type-safe interfaces</strong> that adapt to any ID type
                (ObjectId, UUID, string, number), <strong>cryptographic utilities</strong>{" "}
                for backup codes, <strong>localized errors</strong> in 5 languages,
                and <strong>RBAC primitives</strong> for fine-grained access control.
              </p>
              <p>
                Built with <strong>TypeScript generics</strong> and designed for{" "}
                <strong>maximum flexibility</strong>, these primitives work with
                MongoDB, PostgreSQL, MySQL, or any other database. They provide the
                foundation for the entire Express Suite ecosystem and can be used
                standalone in any Node.js or browser application.
              </p>
            </div>
          </div>
          <div className="value-props">
            <div className="value-prop">
              <strong>🏗️ Type-Safe Foundation</strong>
              <p>
                Generic interfaces that work with any ID type, database, or
                frontend framework
              </p>
            </div>
            <div className="value-prop">
              <strong>🔐 Security Built-In</strong>
              <p>
                Cryptographically-secure backup codes, zero-knowledge auth
                primitives, and RBAC foundations
              </p>
            </div>
            <div className="value-prop">
              <strong>🌍 Global Ready</strong>
              <p>
                Localized errors in 5 languages (English, French, Spanish,
                Chinese, Ukrainian) with extensible i18n support
              </p>
            </div>
            <div className="value-prop">
              <strong>⚙️ Fluent APIs</strong>
              <p>
                Builder patterns for users and roles that reduce boilerplate and
                improve code quality
              </p>
            </div>
          </div>
        </motion.div>

        <div className="components-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="component-card card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="component-header">
                <div className="component-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <span
                  className={`component-badge ${feature.category.toLowerCase()}`}
                >
                  {feature.category}
                </span>
              </div>

              <p className="component-description">{feature.description}</p>

              <ul className="component-highlights">
                {feature.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              <div className="component-tech">
                {feature.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Components;
