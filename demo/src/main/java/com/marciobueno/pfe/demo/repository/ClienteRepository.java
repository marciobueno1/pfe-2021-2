package com.marciobueno.pfe.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.marciobueno.pfe.demo.model.Cliente;

@RepositoryRestResource(collectionResourceRel = "cliente", path = "clientes")
public interface ClienteRepository extends PagingAndSortingRepository<Cliente, Long> {

    /**
     * Método que retorna uma lista de clientes fazendo a busca pelo nome
     passado como parâmetro.
     *
     * @param name
     * @return lista de clientes
     */
    List<Cliente> findByNome(@Param("name") String name);

    /**
     * Método que retorna o cliente com apenas seu nome fazendo a busca
     com o id passado como parâmetro.
     *
     * @param id
     * @return cliente do id passado como parâmetro.
     */
    @Query("SELECT c.nome FROM Cliente c where c.id = :id")
    Cliente findNomeById(@Param("id") Long id);

    /**
     * Método que retorna uma lista de clientes fazendo a busca pelo nome passado
     como parâmetro e ordenando os
     * clientes pelo nome.
     *
     * @param name
     * @return lista de clientes
     */
    List<Cliente> findByNomeOrderByNome(@Param("name") String name);

}
