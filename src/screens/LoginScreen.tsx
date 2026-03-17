import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../components/CustomInput";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../styles/color";

export default function LoginScreen() {
  const [rm, setRm] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    if (!rm.trim() || !password.trim()) {
      Alert.alert("Campos obrigatórios", "Preencha seu RM/e-mail e sua senha.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
          Alert.alert(
      "Login concluído",
      `Seu acesso foi realizado com sucesso.`
    );
    }, 1200);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.topSection}>
              <Image
              source={require("../../assets/fiap-logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />

              <Text style={styles.title}>Portal do Aluno</Text>
              <Text style={styles.subtitle}>
                Entre no portal acadêmico da FIAP com seus dados institucionais.
              </Text>
            </View>

            <View style={styles.card}>
              <CustomInput
                label="E-mail"
                icon="person-outline"
                placeholder="Ex: RM123456@fiap.com.br"
                value={rm}
                onChangeText={setRm}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <CustomInput
                label="Senha"
                icon="lock-closed-outline"
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                isPassword
              />

              <View style={styles.optionsRow}>
                <View style={styles.rememberWrapper}>
                  <Switch
                    value={remember}
                    onValueChange={setRemember}
                    trackColor={{
                      false: "#3A3A42",
                      true: "rgba(237,20,91,0.45)",
                    }}
                    thumbColor={remember ? colors.primary : "#D4D4D8"}
                    
                  />
                  <Text style={styles.rememberText}>Lembrar-me</Text>
                </View>

                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.forgotText}>Esqueci minha senha</Text>
                </TouchableOpacity>
              </View>

              <PrimaryButton
                title="Entrar"
                onPress={handleLogin}
                loading={loading}
              />

              <View style={styles.dividerWrapper}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>ou</Text>
                <View style={styles.divider} />
              </View>

              <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
                <Text style={styles.secondaryButtonText}>Criar conta</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.footer}>
              © FIAP - Faculdade de Informática e Administração Paulista
            </Text>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  topSection: {
    alignItems: "center",
    marginBottom: 26,
  },
  logo: {
    width: 170,
    height: 70,
    marginBottom: 18,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 300,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: "#202028",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.28,
    shadowRadius: 22,
    elevation: 8,
  },
  optionsRow: {
    marginTop: 2,
    marginBottom: 8,
  },
  rememberWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  rememberText: {
    color: colors.textSecondary,
    fontSize: 14,
    marginLeft: 8,
  },
  forgotText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
    alignSelf: "flex-end",
  },
  dividerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    color: colors.textMuted,
    marginHorizontal: 10,
    fontSize: 13,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B1B20",
  },
  secondaryButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
  },
  footer: {
    textAlign: "center",
    marginTop: 24,
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
    paddingHorizontal: 10,
  },
});