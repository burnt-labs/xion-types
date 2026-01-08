plugins {
    kotlin("jvm") version "2.1.0"
    `maven-publish`
    signing
}

group = "io.github.burnt-labs"
version = "0.0.1"

repositories {
    mavenCentral()
}

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
    withSourcesJar()
    withJavadocJar()
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile>().configureEach {
    compilerOptions {
        jvmTarget.set(org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_17)
    }
}

dependencies {
    // Use compileOnly for java-types since we bundle it in the JAR (not a transitive dependency)
    compileOnly(project(":java-types"))
    implementation("com.google.protobuf:protobuf-java:4.31.1")
    implementation("com.google.protobuf:protobuf-kotlin:4.31.1")
}

sourceSets {
    main {
        kotlin {
            setSrcDirs(listOf("types"))
        }
    }
}

tasks.jar {
    archiveBaseName.set("xion-types-kotlin")
    from(sourceSets.main.get().output)
    from(project(":java-types").sourceSets.main.get().output)
}

tasks.named<Jar>("sourcesJar") {
    from(sourceSets.main.get().allSource)
    from(project(":java-types").sourceSets.main.get().allSource)
}

publishing {
    publications {
        create<MavenPublication>("mavenCentral") {
            artifactId = "xion-types-kotlin"
            from(components["java"])

            pom {
                name.set("Xion Types Kotlin")
                description.set("Kotlin/Java protobuf types for the Xion blockchain")
                url.set("https://github.com/burnt-labs/xion-types")

                licenses {
                    license {
                        name.set("Apache License 2.0")
                        url.set("https://www.apache.org/licenses/LICENSE-2.0")
                    }
                }

                developers {
                    developer {
                        id.set("burnt-labs")
                        name.set("Burnt Labs")
                        email.set("dev@burnt.com")
                    }
                }

                scm {
                    connection.set("scm:git:git://github.com/burnt-labs/xion-types.git")
                    developerConnection.set("scm:git:ssh://github.com/burnt-labs/xion-types.git")
                    url.set("https://github.com/burnt-labs/xion-types")
                }
            }
        }
    }

    repositories {
        maven {
            name = "centralPortal"
            url = uri("https://central.sonatype.com/api/v1/publisher/upload")
            credentials {
                username = System.getenv("CENTRAL_USERNAME") ?: "--ADD-HERE-YOUR-VALUE--"
                password = System.getenv("CENTRAL_PASSWORD") ?: "--ADD-HERE-YOUR-VALUE--"
            }
        }
    }
}

signing {
    useGpgCmd()
    sign(publishing.publications["mavenCentral"])
}
