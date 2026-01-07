plugins {
    kotlin("jvm") version "2.1.0"
    `maven-publish`
}

group = "com.burnt-labs"
version = "0.0.1"

repositories {
    mavenCentral()
}

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile>().configureEach {
    compilerOptions {
        jvmTarget.set(org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_17)
    }
}

dependencies {
    implementation(project(":java-types"))
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
    archiveFileName.set("xion-types.jar")
    from(sourceSets.main.get().output)
    from(project(":java-types").sourceSets.main.get().output)
}

publishing {
    publications {
        create<MavenPublication>("maven") {
            from(components["java"])
        }
    }
}
