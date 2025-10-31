// Developer.jsx
// Igual que en el video: GLB clonado + FBX animations + crossfade
import React, { useEffect, useMemo, useRef } from "react";
import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef();

  // 1) Cargar tu GLB (el del avatar) y clonar el esqueleto
  const { scene } = useGLTF("/models/animations/developer.glb"); // <-- tu GLB
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  // 2) Cargar animaciones FBX (usa las que tengas)
  const { animations: idleA }    = useFBX("/models/animations/idle.fbx");
  const { animations: saluteA }  = useFBX("/models/animations/salute.fbx");
  const { animations: clapA }    = useFBX("/models/animations/clapping.fbx");
  const { animations: victoryA } = useFBX("/models/animations/victory.fbx");

  // 3) Nombrarlas (el mixer las identifica por name)
  idleA[0].name    = "idle";
  saluteA[0].name  = "salute";
  clapA[0].name    = "clapping";
  victoryA[0].name = "victory";

  // 4) Conectarlas al grupo que tiene el esqueleto clonado
  const { actions } = useAnimations(
    [idleA[0], saluteA[0], clapA[0], victoryA[0]],
    group
  );

  // 5) Reproducir / cambiar de animación con crossfade
  useEffect(() => {
    const act = actions[animationName];
    if (!act) return;
    act.reset().fadeIn(0.4).play();
    return () => act.fadeOut(0.4);
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* IMPORTANTE: usa el root del esqueleto del avatar */}
      <primitive object={nodes.Hips} />

      {/* Skinned meshes (igual a tu gltfjsx) */}
      <skinnedMesh
        castShadow receiveShadow
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        castShadow receiveShadow
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        castShadow receiveShadow
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        castShadow receiveShadow
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        castShadow receiveShadow
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        castShadow receiveShadow
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />

      {/* Ojos / cabeza con morph targets (si tus nodos existen) */}
      <skinnedMesh
        castShadow receiveShadow
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        castShadow receiveShadow
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        castShadow receiveShadow
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        castShadow receiveShadow
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload("/models/animations/developer.glb");
export default Developer;
